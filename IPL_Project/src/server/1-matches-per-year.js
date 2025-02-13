const fs = require('fs'); // used for import file system 
const path = require('path'); // import path module
const csv = require('csv-parser'); // read csv file

const matchesPerYear = {};

fs.createReadStream(path.join(__dirname, '../data/matches.csv'))
  .pipe(csv())
  .on('data', (row) => {
    const year = row.season; 
    matchesPerYear[year] = (matchesPerYear[year] || 0) + 1;
  })
  .on('end', () => {
    fs.writeFileSync(
      path.join(__dirname, '../public/output/matchesPerYear.json'),
      JSON.stringify(matchesPerYear, null, 5)
    );
    console.log('Matches per year calculation complete!');
  });