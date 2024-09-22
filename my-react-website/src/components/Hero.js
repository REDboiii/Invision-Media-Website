import React from 'react';
import casalunaLogo from '../assets/Casaluna.png';
import gulistanLogo from '../assets/Gulistan.png';
import labeauteLogo from '../assets/labeaute.png';
import draleenLogo from '../assets/draleen.png';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="client-logos">
          <img src={draleenLogo} alt="Draleen Logo" className="client-logo draleen-logo" />
          <img src={casalunaLogo} alt="Casaluna Logo" className="client-logo casaluna-logo" />
          <img src={labeauteLogo} alt="La Beaute Logo" className="client-logo labeaute-logo" />
          <img src={gulistanLogo} alt="Gulistan Logo" className="client-logo gulistan-logo" />
        </div>
        <h1><span className="smaller-text">Elevating Visions Crafting Success</span>Where Creativity Meets Excellence in Marketing</h1>
        <p>Invision Media is carrying creativity into action, Let's impress your client with our marketing services.</p>
        <div className="button-container">
          <a href="#book" className="cta-button">Book a call</a>
          <a href="#learn-more" className="secondary-button">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
