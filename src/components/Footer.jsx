import React from "react";
import "../css/components-css/Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <a href="/" className="link-style logo">
            <FaLink className="icon" />
            <p className="logo-text">Threat Insight</p>
          </a>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Documentation">Documentation</a>
              </li>
              <li>
                <a href="https://github.com/syncattacker/ProjectSafeLink">
                  Contribute
                </a>
              </li>
              <li>
                <a href="/Dashboard">Dashboard</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Community</h3>
            <ul>
              <li>
                <a href="https://github.com/syncattacker/ProjectSafeLink">
                  Github
                </a>
              </li>
              <li>
                <a href="/meet-the-team">Team</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Get in touch</h3>
            <ul className="footer-social">
              <li>
                <a href="/facebook">
                  <i className="fab fa-facebook">
                    <FaFacebookF />
                  </i>
                </a>
              </li>
              <li>
                <a href="/twitter">
                  <i className="fab fa-twitter">
                    <FaTwitter />
                  </i>
                </a>
              </li>
              <li>
                <a href="/linkedin">
                  <i className="fab fa-linkedin">
                    <FaLinkedinIn />
                  </i>
                </a>
              </li>
              <li>
                <a href="/github">
                  <i className="fab fa-github">
                    <FaGithub />
                  </i>
                </a>
              </li>
            </ul>
            <div className="footer-subscribe">
              <input type="email" placeholder="Enter email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Threat Insight. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
