import React, { useState, useEffect } from 'react';

const MouseGradient = () => {
  // Estado para guardar la posición del mouse
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPos({ x: event.clientX, y: event.clientY });
    };

    // Escuchamos el movimiento del mouse
    window.addEventListener('mousemove', handleMouseMove);

    // Limpiar el listener cuando el componente se desmonta
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Estilo dinámico para el círculo, que sigue el mouse
const circleStyle = {
  position: 'fixed',
  top: pos.y - 200 + 'px',
  left: pos.x - 200 + 'px',
  width: '500px',
  height: '500px',
  pointerEvents: 'none',
  background: 'radial-gradient( rgba(68, 15, 117, 0.4) 0%, rgba(0,0,0,0) 80%)',
  mixBlendMode: 'screen',
  borderRadius: '50%',
  transition: 'none',
  zIndex: 0,
  filter: 'blur(40px)'
};


  return <div style={circleStyle}></div>;
};

export default MouseGradient;
