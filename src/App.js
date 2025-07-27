import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import MouseGradient from './MouseGradient';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Requerimientos from './pages/Requerimientos';

function HomePage() {
  return (
    <>
      
      <header>
        <NavBar />
      </header>

      <main>
        <section id="Hero" className="Hero">
          <Hero />
        </section>
        <hr className='linea-separadora'></hr>
        <section id="About" className="about-section">
          <About />
        </section>
        <hr className='linea-separadora'></hr>
        <section id="Contact">
          <Contact />
        </section>
      </main>
      <footer>
        <p>© 2025 Luis Felipe Guillén Márquez - Portfolio Académico</p>
      </footer>
    </>
  );
}

function App() {
  return (
    <div className="App"> {/* Fondo animado se aplica acá */}
      <MouseGradient />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/requerimientos" element={<Requerimientos />} />
      </Routes>
    </div>
  );
}


export default App;
