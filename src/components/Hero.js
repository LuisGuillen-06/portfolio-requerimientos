import React from 'react';
import './Hero.css';
import { imagenes } from '../assets/multimedia';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        
        <motion.div
          className="hero-text"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="typewriter">
            Hola, soy <span className="highlight">Luis Felipe Guillen</span>
          </h1>
          <p className="subtext">
            Estudiante de Ingeniería en Sistemas, enfocado en el <strong>aseguramiento de la calidad</strong>, <strong>desarrollo web</strong> y <strong>soluciones tecnológicas</strong>.
          </p>
          <p className="subtext">
            Apasionado por el aprendizaje constante, la mejora continua y los desafíos que impulsan el crecimiento profesional.
          </p>

          <div className="hero-buttons">
            <Link to="/requerimientos" className="btn btn-primary">Ver Proyectos</Link>
            <a href="#Contact" className="btn btn-outline">Contactame</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src={imagenes.fotoPefil} alt="Luis Felipe" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
