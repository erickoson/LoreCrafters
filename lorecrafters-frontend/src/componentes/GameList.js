// En tu componente GameList.js
import React from 'react';
import GameInfo from './GameInfo';
import './GameList.css';  // Importa tu archivo CSS

const GameList = ({ games }) => {
  // Verificar si "games" es undefined o null
  if (!games) {
    return <div className="no-games">No hay juegos disponibles.</div>;
  }

  return (
    <div className="game-list">
      {games.map((game) => (
        <GameInfo key={game.id} title={game.title} description={game.description} />
      ))}
    </div>
  );
};

export default GameList;


