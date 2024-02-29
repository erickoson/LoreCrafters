import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
