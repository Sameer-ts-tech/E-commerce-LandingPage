import React from 'react';
import './Footer.css'; // Import CSS for Footer
import { FaGithubAlt, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Correct import for social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>SamShop</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-subscription">
          <h2>Subscribe to Our Newsletter</h2>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-social">
          <a href="https://github.com/Sameer-ts-tech" target="_blank" rel="noopener noreferrer">
            <FaGithubAlt />
          </a>
          <a href="https://www.instagram.com/mr_sam.eer_?igsh=OWprbDc3bGx6aGdu" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/mohd-sameer-2074a5231" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SamShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
