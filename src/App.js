// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Certifications from "./Certifications";
import About from "./About";
import Contact from "./Contact";
import ThankYou from "./ThankYou";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router basename="/my-portfolio">
      <header className="header">
        <div className="container">
          <h1>Mayuri S</h1>
          <button className="menu-btn" onClick={toggleMenu}>
            ☰
          </button>
          <nav className={menuOpen ? "nav-open" : ""}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link>
            <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/certifications" onClick={() => setMenuOpen(false)}>Certifications</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
              <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
