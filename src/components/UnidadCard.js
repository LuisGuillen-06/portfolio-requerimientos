// components/UnidadCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './UnidadCard.css';

const UnidadCard = ({ titulo, imagen, onClick }) => {
  return (
    <motion.div
      className="unidad-card"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img src={imagen} alt={titulo} className="unidad-img" />
      <h3>{titulo}</h3>
    </motion.div>
  );
};

export default UnidadCard;
