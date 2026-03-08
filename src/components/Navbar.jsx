import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <h2>Keval</h2>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#service" onClick={() => setMenuOpen(false)}>
              Service
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>

          <a href="/resume.pdf" download className="mobile-resume">
            Download Resume
          </a>
        </ul>

        {/* Desktop Button */}
        <a href="/resume.pdf" download className="desktop-btn">
          <button className="resume-btn">Download Resume</button>
        </a>

        {/* Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
