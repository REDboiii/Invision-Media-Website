import React from 'react';
import casalunaLogo from '../assets/Casaluna.png';
import gulistanLogo from '../assets/Gulistan.png';
import labeauteLogo from '../assets/labeaute.png';
import draleenLogo from '../assets/draleen.png';

function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <h2>Our Clients</h2>
        <div className="logo-container">
          <img src={draleenLogo} alt="Draleen Logo" className="client-logo draleen-logo" />
          <img src={casalunaLogo} alt="Casaluna Logo" className="client-logo casaluna-logo" />
          <img src={labeauteLogo} alt="La Beaute Logo" className="client-logo labeaute-logo" />
          <img src={gulistanLogo} alt="Gulistan Logo" className="client-logo gulistan-logo" />
        </div>
      </div>
    </section>
  );
}

export default Clients;
