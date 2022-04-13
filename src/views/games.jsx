import React from 'react';
import Game from './components/game.jsx';
import Data from '../gameData.js'

function Games() {
  return (
    <div>
      <br/>
      <main className="container flex flexWrap alignCenter">
        <Game dataSet={Data[0]}/>
        <Game dataSet={Data[1]}/>
      </main>
    </div>
  );
}

export default Games;
