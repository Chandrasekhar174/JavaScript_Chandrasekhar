const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const seasonAwards = {};

fs.createReadStream(path.join(__dirname, '../data/matches.csv'))
  .pipe(csv())
  .on('data', (row) => {
    const season = row['season'];
    const player = row['player_of_match'];

    if (!season || !player) return;

    if (!seasonAwards[season]) {
      seasonAwards[season] = {};
    }

    seasonAwards[season][player] = (seasonAwards[season][player] || 0) + 1;
  })
  .on('end', () => {
    const topPlayers = {};

    Object.keys(seasonAwards).forEach((season) => {
      const players = seasonAwards[season];
      const topPlayer = Object.keys(players).reduce((a, b) =>
        players[a] > players[b] ? a : b
      );

      topPlayers[season] = {
        player: topPlayer,
        awards: players[topPlayer]
      };
    });

    // Save result as JSON
    fs.writeFileSync(
      path.join(__dirname, '../public/output/topPlayerEachSeason.json'),
      JSON.stringify(topPlayers, null, 2)
    );

    console.log("✅ Top Player for Each Season saved successfully!");
    console.log(topPlayers);
  })
  .on('error', (err) => {
    console.error('❌ Error reading CSV:', err);
  });
