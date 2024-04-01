/* Updated App.js */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Dogs from './Dogs';
import Contact from './Contact';
import Checkout from './Checkout';
import '../css/body.css';
import '../css/styles.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Pet Adoption Center
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/login" className="nav-link custom-btn">
                  <i className="fas fa-sign-in-alt mr-1"></i>Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link custom-btn" end>
                  <i className="fas fa-home mr-1"></i>Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dogs" className="nav-link custom-btn">
                  <i className="fas fa-dog mr-1"></i>Dogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link custom-btn">
                  <i className="fas fa-phone mr-1"></i>Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout/:dogId" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;