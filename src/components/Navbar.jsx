import React, { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import "../css/global.css";
import "../css/components-css/Navbar.css";

export default function Navbar(props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header ${isScrolled ? "glass-effect" : ""}`}>
      <nav className="navbar">
        <div>
          <a href="/" className="link-style logo">
            <FaLink className="icon" />
            <p className="logo-text">Threat Insight</p>
          </a>
        </div>
        <ul className="navigation">
          {props.links.map((link) => (
            <li key={link.title}>
              <a href={link.redirect} className="nav-elements link-style">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
