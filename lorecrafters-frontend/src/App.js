import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import GameList from './componentes/GameList';
import Contact from './componentes/Contact';


const games = [
  { id: 1, title: 'Game 1', description: 'Description for Game 1' },
  { id: 2, title: 'Game 2', description: 'Description for Game 2' },
  // Add more games as needed
];

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <h1>Welcome to LoreCrafters</h1>
        </Route>
        <Route path="/games">
          <GameList games={games} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/dev">
          {/* Components in different states */}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;