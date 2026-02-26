import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "./Stats";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">❤️ HeartCare</div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#stats">Stats</a>
            </li>

            <li>
              <Link to="/Predict">Predict</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
