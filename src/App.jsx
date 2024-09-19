//imports van react en paginas die zijn gemaakt

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styling/App.scss';
import Vestigingen from './vestigingen';
import FilmRecensie from './filmRecensie';

// functie die er voor zorgt dat als de scherm klein genoeg is dat de menu dan in klapt in een hambruger menu waar alle items in de hamburger menu staan
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
<Link to="/">Home</Link>
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
            <Link to="/">Home</Link>
            </li>
              <li className="nav-item">
                <Link to="/recensies">Film recensie</Link>
                <ul className="dropdown-menu">
                  
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/">Nieuwe Films</Link>
                <ul className="dropdown-menu">
                  <li>Deze week</li>
                  <li>Volgende week</li>
                </ul>
              </li>
              <li className="nav-item">
              <Link className="nav-text"to="/vestigingen">Vestigingen</Link>
                
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
        
          <Routes>
            <Route path="/vestigingen" element={<Vestigingen />} />
            <Route path="/recensies" element={<FilmRecensie/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
