import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sections = [
  { id: 'Hero', label: 'Home', icon: 'house' },
  { id: 'About', label: 'About me', icon: 'user' },
  { id: 'Contact', label: 'Contact', icon: 'envelope' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

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

  // 👇 Función que asegura volver al home y hacer scroll
  const handleSectionClick = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // Esperamos a que Home cargue y luego hacemos scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // Tiempo para asegurar que se renderizó
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h1 className="logo">LuisF. QA|Dev</h1>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {sections.map(({ id, label, icon }) => (
          <li key={id}>
            <button
               className={`nav-link nav-btn ${activeSection === id ? 'active' : ''}`}
              title={label}
              onClick={() => handleSectionClick(id)}
            >
              <FontAwesomeIcon icon={['fas', icon]} className="nav-icon" />
            </button>
          </li>
        ))}

        <li>
          <Link
            to="/requerimientos"
            className="nav-link"
            title="Ingeniería de Requerimientos"
            onClick={() => setMenuOpen(false)}
          >
            <FontAwesomeIcon icon={['fas', 'laptop-code']} className="nav-icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
