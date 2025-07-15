import React from 'react';
import NavBar from '../components/NavBar'; // Asegurate que la ruta sea correcta
import './Requerimientos.css'; // Opcional: para estilizar esta vista si querés

const Requerimientos = () => {
  return (
    <>
      <NavBar />

      <main className="requerimientos-page">
        <h1>Ingeniería de Requerimientos</h1>
        <p>
          Bienvenido a la sección dedicada a los trabajos prácticos, investigaciones y actividades de la materia.
        </p>

        {/* Aquí agregaremos las tarjetas por unidad temática */}
      </main>

      <footer>
        <p>© 2025 Luis Felipe Guillén Márquez - Portfolio académico</p>
      </footer>
    </>
  );
};

export default Requerimientos;
