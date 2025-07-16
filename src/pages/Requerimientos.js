import React from 'react';
import NavBar from '../components/NavBar';
import UnidadCard from '../components/UnidadCard';
import './Requerimientos.css';
import { imagenes } from '../assets/multimedia';

// ⬅️ Definí el array afuera del return
const unidades = [
  {
    titulo: "Unidad 1: Introducción",
    imagen: imagenes.unidad1,
    contenido: (
      <>
        <p>📄 TP1, TP2</p>
      </>
    )
  },
  {
    titulo: "Unidad 2: Requisitos Funcionales",
    imagen: imagenes.unidad2,
    contenido: (
      <>
        <p>🎯 Actividades y simulación</p>
        <a href="/simulacion">🔗 Ver simulación</a>
      </>
    )
  },
   {
    titulo: "Unidad 1: Introducción",
    imagen: imagenes.unidad1,
    contenido: (
      <>
        <p>📄 TP1, TP2</p>
      </>
    )
  },
   {
    titulo: "Unidad 1: Introducción",
    imagen: imagenes.unidad1,
    contenido: (
      <>
        <p>📄 TP1, TP2</p>
      </>
    )
  },
   {
    titulo: "Unidad 1: Introducción",
    imagen: imagenes.unidad1,
    contenido: (
      <>
        <p>📄 TP1, TP2</p>
      </>
    )
  }
  // ➕ Agregá más unidades como quieras
];

const Requerimientos = () => {
  return (
    <>
      <NavBar />

      <main className="requerimientos-page">
        <h1>Ingeniería de Requerimientos</h1>
        <p>
          Bienvenido a la sección dedicada a los trabajos prácticos, investigaciones y actividades de la materia.
        </p>

        <div className="tarjetas-unidades">
          {unidades.map((unidad, index) => (
            <UnidadCard key={index} {...unidad} />
          ))}
        </div>
      </main>

      <footer>
        <p>© 2025 Luis Felipe Guillén Márquez - Portfolio académico</p>
      </footer>
    </>
  );
};

export default Requerimientos;