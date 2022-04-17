import React from 'react';
import Game from './components/game.jsx';
import Data from '../gameData.js'

function Games() {
  return (
    <div>
      <br/>
      <br/>
      <main className="container flex flexWrap alignCenter">
        {Data.map(game => (
          <Game dataSet={game}/>
        ))}

      </main>
    </div>
  );
}

export default Games;
