const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const dismissalStats = {};

fs.createReadStream(path.join(__dirname, '../data/deliveries.csv'))
  .pipe(csv())
  .on('data', (row) => {
    const bowler = row.bowler;
    const batsman = row.batsman;
    const dismissalKind = row.dismissal_kind;

    // Check if dismissal is valid (not "not out")
    if (dismissalKind && dismissalKind !== '""' && dismissalKind !== 'run out') {
      const pair = `${bowler} vs ${batsman}`;

      if (!dismissalStats[pair]) {
        dismissalStats[pair] = 0;
      }
      dismissalStats[pair] += 1;
    }
  })
  .on('end', () => {
    // Convert object to array for sorting
    const sortedDismissals = Object.entries(dismissalStats)
      .map(([pair, count]) => ({ pair, count }))
      .sort((a, b) => b.count - a.count);

    // Get the bowler-batsman pair with the highest dismissals
    const highestDismissal = sortedDismissals[0];

    // Save results to JSON
    fs.writeFileSync(
      path.join(__dirname, '../public/output/highestDismissals.json'),
      JSON.stringify(highestDismissal, null, 2)
    );

    console.log("Highest Dismissals Pair saved successfully!");
    console.log(highestDismissal);
  })
  .on('error', (err) => {
    console.error('Error reading deliveries.csv:', err);
  });
