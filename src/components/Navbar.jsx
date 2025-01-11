import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  // State to control the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle the menu toggle
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img src="./public/logo.jpg" alt="Logo" /> Fit Tracker
        </a>

        {/* Button to toggle the menu visibility */}
        <button
          className="navbar-hamburger"
          onClick={handleMenuToggle} 
        >
          &#9776;
        </button>

        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Pricing</a></li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
