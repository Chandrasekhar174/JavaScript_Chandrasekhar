const fs = require('fs'); // used for import file system 
const path = require('path'); // import path module
const csv = require('csv-parser'); // read csv file

const matchesPerYear = {};

const mloop={};
const arr=[];

fs.createReadStream(path.join(__dirname, '../data/matches.csv'))
  .pipe(csv())
  .on('data', (row) => {
    const year = row.season; 
    matchesPerYear[year] = (matchesPerYear[year] || 0) + 1;
    arr.push(row);
  })
  .on('end', () => {
    fs.writeFileSync(
      path.join(__dirname, '../public/output/matchesPerYear.json'),
      JSON.stringify(matchesPerYear, null, 2)
    );


    // --------------- Using Loop-------------
    for(let matches in arr)
    {
      let y=arr[matches].season;
      if(!mloop[y])
      {
        mloop[y]=0;
      }
      mloop[y]++;
    }
    console.log(mloop);
    // console.log(arr);
    // console.log(arr[0].season);
    
    
    // console.log('Matches per year calculation complete!');
    // console.log(matchesPerYear);
    
  });