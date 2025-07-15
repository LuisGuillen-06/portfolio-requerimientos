import React from 'react';
import './App.css';
import MouseGradient from './MouseGradient';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <MouseGradient />

      {/* Encabezado con navegación */}
      <header>
        <NavBar />
      </header>

      {/* Contenido principal */}
      <main>
        {/* Sección principal tipo presentación */}
        <div id="Hero" className='Hero'>
          <Hero />
        </div>

        {/* Sobre mí */}
        <section id="About" aria-label="Sobre mí" className="about-section">
          <About />
        </section>

        {/* Proyectos */}
        <section id="Projects" className="project">
          <Projects />
        </section>

        {/* Habilidades */}
        <section id="Skills" aria-label="Habilidades">
          <Skills />
        </section>

        {/* Contacto (antes estaba en un aside) */}
        <section id="Contact" aria-label="Contacto">
          <Contact />
        </section>
      </main>

      {/* Pie de página */}
      <footer>
        <p>© 2025 Luis Felipe Guillén Márquez - Portfolio académico</p>
      </footer>
    </div>
  );
}

export default App;
