import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5, // anima cada hijo con delay
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.8, ease: 'easeOut' },
  },
};

const Contact = () => {
  const items = [
    {
      icon: 'envelope',
      href: 'mailto:luisfgm0611@gmail.com',
      text: 'luisfgm0611@gmail.com',
    },
    {
      icon: ['fab', 'github'],
      href: 'https://github.com/LuisGuillen-06',
      text: 'GitHub',
    },
    {
      icon: ['fab', 'linkedin'],
      href: 'https://www.linkedin.com/in/luis-felipe-guillen-marquez/',
      text: 'LinkedIn',
    },
  ];

  return (
    <section className="contact-container">
      <motion.h2
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        Contacto
      </motion.h2>

      <motion.div
        className="contact-info"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {items.map((item, i) => (
          <motion.p
            key={i}
            variants={itemVariants}
            className="contact-item"
          >
            <FontAwesomeIcon icon={item.icon} className="icon" />
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.text}
            </a>
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
