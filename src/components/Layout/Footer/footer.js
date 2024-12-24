// Footer.js
import React from 'react';
import './footer.css';  // Importing the CSS file

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: dsheikh242@.com</p>
          <p>Phone: +91 7006259479</p>
        </div>

        <div className="footer-section">
          <h3>Address</h3>
          <p>123 Main St, Suite 101</p>
          <p>Cityville, ST 12345</p>
        </div>

        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a leading company in the industry, offering top-notch products and services to our customers.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getUTCFullYear()} Danish&co. All Rights Reserved.</p>
      </div>
    </div>
    
  );
}
