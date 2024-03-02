// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import GameList from './componentes/GameList';
import Contact from './componentes/Contact';
import ApiExample from './componentes/ApiExample'; // Importa el componente ApiExample

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/api-example" element={<ApiExample />} /> {/* Nueva ruta para ApiExample */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

