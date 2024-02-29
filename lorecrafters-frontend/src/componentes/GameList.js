import React from 'react';
import GameInfo from './GameInfo';

const GameList = ({ games }) => {
  // Verificar si "games" es undefined o null
  if (!games) {
    return <div>No hay juegos disponibles.</div>;
  }

  return (
    <div>
      {games.map((game) => (
        <GameInfo key={game.id} title={game.title} description={game.description} />
      ))}
    </div>
  );
};

export default GameList;

