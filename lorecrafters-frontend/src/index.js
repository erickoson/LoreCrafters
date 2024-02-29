import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

const renderApp = () => {
  createRoot(root).render(<App />);
};

renderApp();

// Si deseas conservar la capacidad de Hot Module Replacement (HMR), puedes usar lo siguiente:
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
