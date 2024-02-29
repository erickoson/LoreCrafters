// En tu componente Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Importa tu archivo CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;

