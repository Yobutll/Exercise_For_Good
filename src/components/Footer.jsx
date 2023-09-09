import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLine,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="rows">
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>Tel. phone: 099-17xx-xxx</li>
              <li>E-mail: mahateo@kkumail.com</li>
              <li>Line ID: tor2314</li>
              <div className="social-links">
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faLine} /></a>
              </div>
            </ul>
          </div>
          <div className="footer-col">
            <h4>About Us</h4>
            <ul>
              <li><a href="/">Home Page</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Sign up</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="/term&policy">Term & policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Premium</h4>
            <ul>
              <li><a href="#">Monthly</a></li>
              <li><a href="#">Yearly</a></li>
              <li><a href="#">Permanent</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;