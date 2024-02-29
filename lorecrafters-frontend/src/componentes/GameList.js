import React from 'react';
import GameInfo from './GameInfo';

const GameList = ({ games }) => {
  return (
    <div>
      {games.map((game) => (
        <GameInfo key={game.id} title={game.title} description={game.description} />
      ))}
    </div>
  );
};

export default GameList;
