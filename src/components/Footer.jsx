import React from "react";
import "../css/components-css/Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="border-line"></div>
      <footer className="footer">
        <div className="logo-about">
          <div className="footer-logo">
            <FaLink className="icon" />
            <p className="logo-text">Threat Insight.</p>
          </div>
          <p className="footer-about">
            Threat Insight is dedicated to advancing cybersecurity through
            cutting-edge research and innovative tools.
          </p>
          <p className="power">be secure.</p>
        </div>
        <div>
          <p className="footer-heading">explore</p>
          <div className="footers-links">
            <div className="footer-link">
              <a href="/meet-the-team">Team</a>
              <MdOutlineKeyboardArrowRight className="footer-icon" />
            </div>
            <div className="footer-link">
              <a href="https://github.com/syncattacker/ProjectSafeLink">
                Contribute
              </a>
              <MdOutlineKeyboardArrowRight className="footer-icon" />
            </div>
            <div className="footer-link">
              <a href="/documentation">Documentation</a>
              <MdOutlineKeyboardArrowRight className="footer-icon" />
            </div>

            <div className="footer-link"></div>
          </div>
        </div>
        <div>
          <p className="footer-heading">community</p>
          <div className="footers-links">
            <div className="footer-link">
              <a href="mailto:connect.cipherrats@gmail.com">Support</a>
              <MdOutlineKeyboardArrowRight className="footer-icon" />
            </div>
            <div className="footer-link">
              <a href="https://github.com/Threat-Insight">Organization</a>
              <MdOutlineKeyboardArrowRight className="footer-icon" />
            </div>
          </div>
        </div>
        <div>
          <p className="footer-heading">other projects</p>
          <div className="footers-links">
            <div className="footer-link">
              <a href="https://github.com/hackpure/DVWA-AttackTool">
                DVWA Tool
              </a>
              <MdOutlineKeyboardArrowRight className="footer-icon" />
            </div>
            <div className="footer-link">
              <a href="https://github.com/KushagraVarshney101/SSTI_Detector">
                SSTI Detector
              </a>
              <MdOutlineKeyboardArrowRight className="footer-icon" />
            </div>
            <div className="footer-link">
              <a href="https://github.com/secfreaky/CyberSecurity-Tools">
                Network Tools
              </a>
              <MdOutlineKeyboardArrowRight className="footer-icon" />
            </div>
          </div>
        </div>
      </footer>
      <div
        className="border-line"
        style={{ margin: "0 auto", width: "60%" }}
      ></div>
      <div className="copyright-info">
        <p className="copyright">
          Copyright © 2024 Threat Insight. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
