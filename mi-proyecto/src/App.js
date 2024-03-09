// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Ajusta la ruta
import Footer from './Components/Footer'; // Ajusta la ruta
import Home from './pages/Home';
import Dev from './pages/Dev';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dev" element={<Dev />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
