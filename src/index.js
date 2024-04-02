import React from 'react';
import { createRoot } from 'react-dom/client';  
import App from './javascript/App';
import reportWebVitals from './reportWebVitals';
import './css/body.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router basename="/pet-adoption-center.github.io">
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
