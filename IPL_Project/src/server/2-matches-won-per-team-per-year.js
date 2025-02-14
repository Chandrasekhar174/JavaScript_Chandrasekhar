const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { log } = require('console');

const matchesWonPerYear = {};

const arr=[];
const mloop={};

fs.createReadStream(path.join(__dirname, '../data/matches.csv'))
  .pipe(csv())
  .on('data', (row) => {
    const year = row.season;
    const winner = row.winner;

    if (!matchesWonPerYear[year]) 
      matchesWonPerYear[year] = {};
    
    matchesWonPerYear[year][winner] = (matchesWonPerYear[year][winner] || 0) + 1;
    arr.push(row);
  })
  .on('end', () => {
    fs.writeFileSync(
      path.join(__dirname, '../public/output/matchesWonPerYear.json'),
      JSON.stringify(matchesWonPerYear, null, 2)
    );
    // --------------------------- using Loop--------------------

    for(let matches in arr)
    {
        const year=arr[matches].season;
        const winner=arr[matches].winner;
        if(!mloop[year])
        {
          mloop[year]={};
        }
        mloop[year][winner]=(mloop[year][winner] || 0)+1;
    }
    console.log(mloop);
    
    console.log('Matches won per team per year calculation complete!');
  });
  