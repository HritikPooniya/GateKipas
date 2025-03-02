import React from 'react';
import "../assets/styles/footer.css";
import logo from '../assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-container">
        <div className="footer-section company-info">
          <img className="footer-logo" src={logo} alt="Logo" />
          <div className="social-icons mt-5">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
          </div>
        </div>

        <div className="footer-section">
          <ul>
            <li className="footer-heading">Company</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-section">
          <ul>
            <li className="footer-heading">Support</li>
            <li>Contact</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div className="footer-section">
          <ul>
            <li className="footer-heading">Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
          </ul>
        </div>

        <div className="footer-section">
          <ul>
            <li className="footer-heading">Follow Us</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
