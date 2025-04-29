import React from "react";
import "./Footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-left">
          <h2>Contact Me</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="4" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="footer-right">
          <h2>Let's Connect</h2>
          <p>Email: satyamanand643@gmail.com</p>
          <p>Phone: +91-84427861995</p>
          <div className="socials">
            <a href="https://github.com/Codename-satyam"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/satyam-anand33/"><FaLinkedin /></a>
            <a href="https://www.instagram.com/dumb_creeper/"><FaInstagram /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Satyam Anand | All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
