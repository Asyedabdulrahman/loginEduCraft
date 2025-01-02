import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section: Contact Info */}
        <div className="footer-section contact-info">
          <h4>EduCraft</h4>
          <p>Email: <a href="mailto:Help@EduCraft.Com">Help@EduCraft.Com</a></p>
          <p>Phone: <a href="tel:+919876543210">+91 9876543210</a></p>
        </div>

        {/* Middle Section: Links */}
        <div className="footer-section quick-links">
          <h4>Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/benefits">Benefits</a></li>
          </ul>
        </div>
        <div className="footer-section legal-links">
          <h4>Legal</h4>
          <ul>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/cookies">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Right Section: Image */}
        <div className="footer-section image-preview">
          <img
            src="/path/to/your/image.jpg"
            alt="Website Preview"
            className="img-fluid"
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2022 EduCraft. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
