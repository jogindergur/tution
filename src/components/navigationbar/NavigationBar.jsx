// src/components/NavigationBar.js
import { useEffect, useState } from 'react';
import './NavigationBar.css';

const NavigationBar = ({ instituteName }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Add shadow when scrolled a bit
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="#home" onClick={closeMobileMenu}>{instituteName}</a>
        </div>

        <button
          className="mobile-menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#courses" onClick={closeMobileMenu}>Courses</a></li>
          <li><a href="#faculty" onClick={closeMobileMenu}>Faculty</a></li>
          <li><a href="#contact" className="nav-contact-link" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;