const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const matches = [];
const bowlersData = {};


fs.createReadStream(path.join(__dirname, '../data/matches.csv'))
  .pipe(csv())
  .on('data', (row) => {
    if (row.season === '2015') {
      matches.push(row.id);
    }
  })
  .on('end', () => {
    fs.createReadStream(path.join(__dirname, '../data/deliveries.csv'))
      .pipe(csv())
      .on('data', (row) => {
        if (matches.includes(row.match_id)) {
          const bowler = row.bowler;
          if (!bowlersData[bowler]) {
            bowlersData[bowler] = { runs: 0, balls: 0 };
          }
          bowlersData[bowler].runs += parseInt(row.total_runs);
          bowlersData[bowler].balls += 1;
        }
      })
      .on('end', () => {
        const bowlersEconomy = Object.keys(bowlersData).map((bowler) => ({
          bowler,
          economy: bowlersData[bowler].runs / (bowlersData[bowler].balls / 6)
        }));

        bowlersEconomy.sort((a, b) => a.economy - b.economy);

        fs.writeFileSync(
          path.join(__dirname, '../public/output/economicalBowlers2015.json'),
          JSON.stringify(bowlersEconomy.slice(0, 10), null, 2)
        );
        console.log(bowlersData);
      });
  });
