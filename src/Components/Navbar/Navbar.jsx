import React from "react";
import "./Navbar.css";

function app() {
  return (
    <div className="main-nav">
      <div className="Logo">
        {/* <img src="https://via.placeholder.com/150" alt="Logo" /> */}
        <h1>Satyam.Anand</h1>
      </div>
      <div className="Nav">
        <nav>
            <a href="#home">Home</a>
            <a href="#about">Profile</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
}
export default app;
