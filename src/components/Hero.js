import React from 'react';
import './Hero.css';
import { imagenes } from '../assets/multimedia';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="typewriter">Hola, soy <span className="highlight">Luis Felipe</span></h1>
          <p className="subtext">
            Estudiante de Ingeniería en Sistemas, enfocado en <strong>desarrollo web</strong> y <strong>soluciones tecnológicas</strong>.
          </p>
          <p className="subtext">
            Apasionado por el aprendizaje constante, la mejora continua y los desafíos que impulsan el crecimiento profesional.
          </p>

          <div className="hero-buttons">
            <Link to="/requerimientos" className="btn btn-primary">Ver Proyectos</Link>
            <a href="#Contact" className="btn btn-outline">Contactame</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={imagenes.fotoPefil} alt="Luis Felipe" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
