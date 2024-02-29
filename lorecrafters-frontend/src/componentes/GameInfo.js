// En tu componente GameInfo.js
import React from 'react';
import './GameInfo.css';  // Importa tu archivo CSS

const GameInfo = ({ title, description }) => {
  return (
    <div className="game-info">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default GameInfo;

