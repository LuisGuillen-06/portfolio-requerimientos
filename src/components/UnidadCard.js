
// components/UnidadCard.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './UnidadCard.css';

const UnidadCard = ({ titulo, imagen, contenido }) => {
  const [expandido, setExpandido] = useState(false);

  return (
    <motion.div
      className={`unidad-card ${expandido ? 'expandido' : ''}`}
      onClick={() => setExpandido(!expandido)}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img src={imagen} alt={titulo} className="unidad-img" />
      <h3>{titulo}</h3>

      <AnimatePresence>
        {expandido && (
          <motion.div
            className="unidad-contenido"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {contenido}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UnidadCard;