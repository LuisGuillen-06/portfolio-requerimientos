import React from 'react';

const Projects = () => {
  const trabajos = [
    { titulo: "Tienda Mascotas", descripcion: "Hecha con C# y SQL Server" },
    { titulo: "Blog El Tigre", descripcion: "Hecho en HTML, CSS y JS" },
    { titulo: "Sistema de Usuarios", descripcion: "Con login, DVH y DVV" }
  ];

  return (
    <section className="projects" id="proyectos" aria-labelledby="projects-title">
      <h2 id="projects-title">Proyectos</h2>
      <div className="project-grid">
        {trabajos.map((proy, idx) => (
          <section key={idx} className="project-card">
            <h3>{proy.titulo}</h3>
            <p>{proy.descripcion}</p>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Projects;
