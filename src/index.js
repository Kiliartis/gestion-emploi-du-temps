import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Crée un root React pour le rendu
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rend l'application dans le DOM
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Mesure les performances (optionnel)
reportWebVitals();