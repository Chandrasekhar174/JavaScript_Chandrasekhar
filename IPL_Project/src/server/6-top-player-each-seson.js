const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const seasonAwards = {};

const mloop=[]; // store matches data 

fs.createReadStream(path.join(__dirname, '../data/matches.csv'))
  .pipe(csv())
  .on('data', (row) => {
    mloop.push(row);
    const season = row['season'];
    const player = row['player_of_match'];

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

    console.log("Top Player for Each Season saved successfully!");
    // console.log(topPlayers);
    // console.log(seasonAwards);
    //  ------------- using loop----------------------
    const seasonPlayerloop={}; // store all player of match per season
    for(const matches in mloop)
    {
      const season=mloop[matches].season;
      const player=mloop[matches].player_of_match;

      if(!seasonPlayerloop[season])
      {
        seasonPlayerloop[season]={};

      }
      seasonPlayerloop[season][player]=(seasonPlayerloop[season][player]||0)+1
    }
    // console.log(seasonPlayerloop);
    const topPlayersPerSeason={};
    for (let season in seasonPlayerloop) {
      let maxAwards = 0;
      let topPlayer = null;

      for (let player in seasonPlayerloop[season]) {
          if (seasonPlayerloop[season][player] > maxAwards) {
              maxAwards = seasonPlayerloop[season][player];
              topPlayer = player;
          }
      }

      topPlayersPerSeason[season] = { player: topPlayer, awards: maxAwards };
    }
    console.log(topPlayersPerSeason);
    
    
  })
  .on('error', (err) => {
    console.error('Error reading CSV:', err);
  });
