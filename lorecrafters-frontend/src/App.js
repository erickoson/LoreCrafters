// Importa los componentes necesarios de react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa tus componentes de las rutas
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import GameList from './componentes/GameList';
import Contact from './componentes/Contact';

// Define tus rutas usando el componente Routes
function App() {
  return (
    <Router>
      {/* Navbar siempre presente */}
      <Navbar />

      {/* Define tus rutas con el componente Routes */}
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>

      {/* Footer siempre presente */}
      <Footer />
    </Router>
  );
}

export default App;
