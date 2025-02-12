const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const bowlerStats = {};

fs.createReadStream(path.join(__dirname, '../data/deliveries.csv'))
  .pipe(csv())
  .on('data', (row) => {
    // Check if the delivery is from a Super Over
    if (row.is_super_over === '1') {
      const bowler = row.bowler;
      const runs = parseInt(row.total_runs);

      // Initialize bowler stats if not present
      if (!bowlerStats[bowler]) {
        bowlerStats[bowler] = { runs: 0, balls: 0 };
      }

      bowlerStats[bowler].runs += runs;
      bowlerStats[bowler].balls += 1;
    }
  })
  .on('end', () => {
    // Calculate economy rate for each bowler
    const economyRates = Object.entries(bowlerStats)
      .map(([bowler, stats]) => ({
        bowler,
        economy: stats.runs / (stats.balls / 6)
      }))
      .sort((a, b) => a.economy - b.economy); // Sort by best (lowest) economy rate

    const bestBowler = economyRates[0];

    // Save results to JSON
    fs.writeFileSync(
      path.join(__dirname, '../public/output/bestSuperOverBowler.json'),
      JSON.stringify(bestBowler, null, 2)
    );

    console.log("Best Super Over Bowler saved successfully!");
    console.log(bestBowler);
  })
  .on('error', (err) => {
    console.error('Error reading deliveries.csv:', err);
  });
