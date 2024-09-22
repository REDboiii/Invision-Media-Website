import React, { useState, useEffect } from 'react';
import logo from '../assets/Logo - White 2.png';

function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'results', 'services', 'process', 'faqs'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            ☰
          </button>
          <img src={logo} alt="Invision Logo" className="logo" />
          <ul className={mobileMenuOpen ? 'show' : ''}>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About Us</a></li>
            <li><a href="#results" className={activeSection === 'results' ? 'active' : ''}>Results</a></li>
            <li><a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
            <li><a href="#process" className={activeSection === 'process' ? 'active' : ''}>Process</a></li>
            <li><a href="#faqs" className={activeSection === 'faqs' ? 'active' : ''}>FAQs</a></li>
            <li className="mobile-cta"><a href="#book" className="cta-button">Book a call</a></li>
          </ul>
          <div className="desktop-cta">
            <a href="#book" className="cta-button">Book a call</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
