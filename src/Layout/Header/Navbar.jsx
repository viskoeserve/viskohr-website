import React, { useState } from "react";
import logo from "../../assets/img/Visko_logo.png";
import { FaBars } from "react-icons/fa";
import "../../assets/css/style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src={logo} alt="Logo" />
        </a>

        <nav
          id="navbar"
          className={`navbar ${menuActive ? "navbar-mobile" : ""}`}
        >
          <ul>
            <li>
              <a
                className="nav-link scrollto"
                href="/"
                onClick={() => setMenuActive(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#about"
                onClick={() => setMenuActive(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#services"
                onClick={() => setMenuActive(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#features"
                onClick={() => setMenuActive(false)}
              >
                Features
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#contact"
                onClick={() => setMenuActive(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="get-started-btn scrollto text-decoration-none text-light justify-content-center mr-2 "
                href="https://remarkhr.com/" 
              >
                Get Started
              </a>
            </li>
          </ul>
          <FaBars
            className={`mobile-nav-toggle ${menuActive ? "bi-x" : "bi-list"}`}
            onClick={toggleMenu}
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
