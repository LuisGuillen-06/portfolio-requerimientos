import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="sobre-mi" aria-labelledby="about-title">
      <h2 id="about-title">Sobre mí</h2>
      <h3 className="subtitle">Apasionado por el desarrollo y la innovación</h3>
      <p>
        Soy estudiante en la UAI, amante del desarrollo de software. Este portfolio muestra mis trabajos prácticos realizados a lo largo de la carrera. 
        Me especializo en tecnologías web modernas, siempre buscando aprender nuevas herramientas para crear productos de calidad y con buen diseño. 
        Creo en el trabajo constante, la mejora continua y la colaboración para alcanzar los mejores resultados.
      </p>
    </section>
  );
};

export default About;
