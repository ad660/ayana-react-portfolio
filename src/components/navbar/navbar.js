import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from 'react';



function Navbar() {

    const [navBarHeight, setNavBarHeight] = useState(0);

    // useEffect hook to update the nav bar height when the component mounts
    useEffect(() => {
      const height = document.querySelector('.navbar').offsetHeight;
      setNavBarHeight(height);
    }, []);



  return (
    <>
        <nav className="navbar">
        <a className="navbar-brand" href="/">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <h1>
            <span className="nav-highlight">A</span>yana <span className="nav-highlight">D</span>ouglas
          </h1>
        </a>
        <div className="navbar-links">
          <NavLink to="/">My Portfolio</NavLink>
          <NavLink to="/contact">Contact me</NavLink>
        </div>
      </nav>
      <div className="wave" style={{ marginTop: navBarHeight }}></div>
    </>
  );

}

export default Navbar;
