import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sections = [
  { id: 'Hero', label: 'Home', icon: 'house' },
  { id: 'About', label: 'About me', icon: 'user' },
  { id: 'Projects', label: 'Projects', icon: 'laptop-code' },
  { id: 'Skills', label: 'Skills', icon: 'code' },
  { id: 'Contact', label: 'Contact', icon: 'envelope' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h1 className="logo">LuisF.Dev</h1>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {sections.map(({ id, label, icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              title={label}
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={['fas', icon]} className="nav-icon" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
