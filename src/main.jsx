import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Importa el componente App
import './styles.css'; // Si tienes estilos

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
