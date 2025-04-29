import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main-nav">
      <div className="Logo">
        <h1>Satyam.Anand</h1>
      </div>

      <div className={`Nav ${menuOpen ? "active" : ""}`}>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">Profile</a>
          <a href="#contact">Contact</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
        </nav>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </div>
  );
}

export default Navbar;
