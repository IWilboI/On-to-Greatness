import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; 
const root = ReactDOM.createRoot(document.getElementById('app')); // Ensure this matches the div in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
