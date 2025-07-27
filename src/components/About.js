import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const h2Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.8, ease: 'easeOut' },
    },
  };

  const h3Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.8, ease: 'easeOut', delay: 0.2 },
    },
  };

  const pVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.8, ease: 'easeOut', delay: 0.4 },
    },
  };

  return (
    <section className="about-section" id="sobre-mi" aria-labelledby="about-title" ref={ref}>
      <motion.h2
        id="about-title"
        variants={h2Variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Sobre mí
      </motion.h2>

      <motion.h3
        className="subtitle"
        variants={h3Variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Apasionado por el desarrollo y la innovación
      </motion.h3>

      <motion.p
        variants={pVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Soy estudiante en la UAI, amante del desarrollo de software y el aseguramiento de la calidad. Este portfolio muestra mis trabajos prácticos realizados a lo largo de la carrera, específicamente en la materia de Ingeniería de Requerimientos. 
        Me especializo en tecnologías web modernas, QA Testing, siempre buscando aprender nuevas herramientas para crear productos de calidad y con buen diseño. 
        Creo en el trabajo constante, la mejora continua y la colaboración para alcanzar los mejores resultados.
      </motion.p>
    </section>
  );
};

export default About;

