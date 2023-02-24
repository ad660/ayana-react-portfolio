import React from "react";
import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";




function Hero() {
  return (
    <>
    <header>
        <div className="hero-container">
          <div className="welcome">
            <h1>Welcome to my portfolio</h1>
            <h3>This is just a little something I whipped up using react. Please enjoy my cute cat icon for an avatar</h3>
            <h3>Github: Ad660 </h3>
            <h3>email: Ayanahennings@gmail.com</h3>
            <h3>LinkedIn: <a className="linkedin" href="https://www.linkedin.com/in/ayana-douglas-07787b196/">here</a></h3>
          </div>
          <div className="avatar">
          <FontAwesomeIcon icon={faCat} size="10x" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;
