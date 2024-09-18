import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.scss';
import Vestigingen from './vestigingen';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <div className="navbar">
            <div className="hamburger-menu" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
              <li className="nav-item">
                <Link to="/">Nieuwe Film's</Link>
                <ul className="dropdown-menu">
                  <li>Actie</li>
                  <li>Komedie</li>
                  <li>Drama</li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/">Agenda</Link>
                <ul className="dropdown-menu">
                  <li>Deze week</li>
                  <li>Volgende week</li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/">Contact</Link>
                <ul className="dropdown-menu">
                  <li>Klantenservice</li>
                  <li><Link to="/vestigingen">Vestigingen</Link></li>
                </ul>
              </li>
            </ul>
            <div className="search-bar">
              <input
                type="autocomplete"
                placeholder="Zoek een film..."
                aria-label="Zoek een film"
              />
              <button type="submit">Zoek</button>
            </div>
          </div>
        </header>
        <main>
        {/* <div className="header-content">
            <h1>Welkom bij de Bioscoop</h1>
            <p>Ontdek de nieuwste films en reserveer je tickets online!</p>
          </div> */}
          <Routes>
            {/* <Route path="/" element={<div>Home Page Content</div>} /> */}
            <Route path="/vestigingen" element={<Vestigingen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
