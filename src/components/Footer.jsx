import React from 'react';
import './Footer.css';  // Ensure the path to the CSS file is correct

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
    
  <p class="footer-copy">&copy; 2025 FitLife Tracker</p>
  <p class="footer-text">Created by Halima Sadia</p>


        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a> | 
          <a href="/terms-of-service"> Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
