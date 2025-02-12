const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const seasonMatches = {};
const batsmanStats = {};

// Step 1: Read matches.csv to get match IDs for each season
fs.createReadStream(path.join(__dirname, '../data/matches.csv'))
  .pipe(csv())
  .on('data', (row) => {
    const season = row.season;
    const matchId = row.id;

    if (!seasonMatches[season]) {
      seasonMatches[season] = new Set();
    }
    seasonMatches[season].add(matchId);
  })
  .on('end', () => {
    // Step 2: Read deliveries.csv to calculate runs and balls faced
    fs.createReadStream(path.join(__dirname, '../data/deliveries.csv'))
      .pipe(csv())
      .on('data', (row) => {
        const matchId = row.match_id;
        const batsman = row.batsman;
        const runs = parseInt(row.batsman_runs);
        const isLegalDelivery = row.wide_runs === "0"; // Wide balls are not counted as balls faced

        // Find season for the match
        for (const season in seasonMatches) {
          if (seasonMatches[season].has(matchId)) {
            if (!batsmanStats[season]) {
              batsmanStats[season] = {};
            }
            if (!batsmanStats[season][batsman]) {
              batsmanStats[season][batsman] = { runs: 0, balls: 0 };
            }

            batsmanStats[season][batsman].runs += runs;
            if (isLegalDelivery) {
              batsmanStats[season][batsman].balls += 1;
            }
          }
        }
      })
      .on('end', () => {
        // Step 3: Calculate strike rate for each batsman per season
        const strikeRates = {};

        for (const season in batsmanStats) {
          strikeRates[season] = {};

          for (const batsman in batsmanStats[season]) {
            const { runs, balls } = batsmanStats[season][batsman];

            if (balls > 0) {
              const strikeRate = ((runs / balls) * 100).toFixed(2);
              strikeRates[season][batsman] = parseFloat(strikeRate);
            }

          }
        }

        // Step 4: Save the result as JSON
        fs.writeFileSync(
          path.join(__dirname, '../public/output/batsmanStrikeRate.json'),
          JSON.stringify(strikeRates, null, 2)
        );

        console.log("Batsman Strike Rate per Season saved successfully!");
        console.log(strikeRates);
      })
      .on('error', (err) => {
        console.error(' Error reading deliveries.csv:', err);
      });
  })
  .on('error', (err) => {
    console.error('Error reading matches.csv:', err);
  });
