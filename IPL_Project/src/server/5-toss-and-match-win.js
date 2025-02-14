const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const tossAndMatchWins = {};
const matches=[] // it is use for loop

fs.createReadStream(path.join(__dirname, '../data/matches.csv'))
  .pipe(csv())
  .on('data', (row) => {
    matches.push(row);
    const tossWinner = row['toss_winner'];
    const matchWinner = row['winner'];

    if (tossWinner && matchWinner && tossWinner === matchWinner) {
      tossAndMatchWins[tossWinner] = (tossAndMatchWins[tossWinner] || 0) + 1;
    }
  })
  .on('end', () => {
    // Save result as JSON
    fs.writeFileSync(
      path.join(__dirname, '../public/output/tossAndMatchWinners.json'),
      JSON.stringify(tossAndMatchWins, null, 2)
    );

    console.log("Toss and Match Winners data saved successfully!");
    // ---------------- using loop-----------------
    const tossAndMatchWinnerslopp={};
    for(let matche in matches)
    {
      let tossWinner=matches[matche].toss_winner;
      let matchWinner=matches[matche].winner;

      if(tossWinner && matchWinner && tossWinner===matchWinner)
      {
        tossAndMatchWinnerslopp[tossWinner]=(tossAndMatchWinnerslopp[tossWinner]||0)+1;
      }
    }
    // console.log(matches);
    
    console.log(tossAndMatchWinnerslopp);
    

    // console.log(tossAndMatchWins);
  })
  .on('error', (err) => {
    console.error('Error reading CSV:', err);
  });
