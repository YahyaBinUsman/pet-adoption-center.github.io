// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';  
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './javascript/App';
import reportWebVitals from './reportWebVitals';
import './css/body.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <BrowserRouter basename="/pet-adoption-center.github.io"> {/* Add basename */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);

reportWebVitals();
