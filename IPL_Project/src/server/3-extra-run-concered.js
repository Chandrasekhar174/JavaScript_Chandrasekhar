const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const matches = [];
const extraRuns = {};

fs.createReadStream(path.join(__dirname, '../data/matches.csv'))
  .pipe(csv())
  .on('data', (row) => {
    if (row.season === '2016') {
      matches.push(row.id);
    }
  })
  .on('end', () => {
    fs.createReadStream(path.join(__dirname, '../data/deliveries.csv'))
      .pipe(csv())
      .on('data', (row) => {
        if (matches.includes(row.match_id)) {
          const team = row.bowling_team;
          extraRuns[team] = (extraRuns[team] || 0) + parseInt(row.extra_runs);
        }
      })
      .on('end', () => {
        fs.writeFileSync(
          path.join(__dirname, '../public/output/extraRuns2016.json'),
          JSON.stringify(extraRuns, null, 2)
        );
        console.log('Extra runs conceded per team in 2016 calculated!');
      });
  });
