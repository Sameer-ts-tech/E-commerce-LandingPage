import React, { useState } from 'react';
import './Navbar.css'; // Import CSS for Navbar

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search functionality here, e.g., redirect or perform a search
    console.log('Search query:', searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img src="/images/logo.png" alt="ShopEasy Logo" className="logo-image" />
        </a>
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#promotions">Promotions</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <form className="navbar-search" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="submit" className="search-button">
            🔍
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
