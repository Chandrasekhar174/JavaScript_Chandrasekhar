const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const matchesWonPerYear = {};

fs.createReadStream(path.join(__dirname, '../data/matches.csv'))
  .pipe(csv())
  .on('data', (row) => {
    const year = row.season;
    const winner = row.winner;

    if (!matchesWonPerYear[year]) matchesWonPerYear[year] = {};
    matchesWonPerYear[year][winner] = (matchesWonPerYear[year][winner] || 0) + 1;
  })
  .on('end', () => {
    fs.writeFileSync(
      path.join(__dirname, '../public/output/matchesWonPerYear.json'),
      JSON.stringify(matchesWonPerYear, null, 2)
    );
    console.log('Matches won per team per year calculation complete!');
  });
