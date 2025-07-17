// pages/Requerimientos.jsx
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import UnidadCard from '../components/UnidadCard';
import Modal from '../components/Modal';
import './Requerimientos.css';
import { imagenes } from '../assets/multimedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const unidades = [
  {
    titulo: "Clase 1 - Software: Producto y Proceso",
    imagen: imagenes.unidad1,
    contenido: (
    <>
      <h3>
        <FontAwesomeIcon icon="file-lines" style={{ marginRight: '8px', color: '#792aa9ff' }} />
        El Software como producto y como proceso</h3>
      
      <p>
        Durante esta clase se examina en profundidad el concepto de software, rastreando su evolución histórica desde las ideas de Alan Turing y John Tukey hasta su naturaleza multifacética actual, que abarca no solo programas ejecutables sino también información y conocimiento.
      </p>
      <p>
        Se discute la naturaleza única del software, destacando su intangibilidad y el desafío que representa su desarrollo intensivo en mano de obra. Además, se analizan las cualidades deseables del software (internas y externas), la deseconomía de escala, y el concepto de proceso como secuencia de pasos con actividades, recursos y restricciones que producen resultados.
      </p>
      <hr></hr>
      <h3><FontAwesomeIcon icon="tasks" style={{ marginRight: '8px', color: '#388e3c' }} />
        Actividad</h3>
      <p>
        Esta actividad consistió en completar un cuadro comparativo con otras industrias, mencionando además dos cualidades clave que debe poseer un software.
      </p>
      <p><FontAwesomeIcon icon="book" style={{ marginRight: '8px', color: '#792aa9ff' }} />Podés ver el PDF completo de la actividad reazlizada a continuación:</p>
      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/1e2Joe4-JA9zARLPqMyN88MY_UNFoydDg/preview"
          width="100%"
          height="500"
          allow="autoplay"
          title="PDF Actividad Unidad 1"
        ></iframe>
      </div>
      <hr></hr>
      <h3>
      Debate de cierre de la clase 1</h3>
      <h4><FontAwesomeIcon icon="comments" style={{ marginRight: '8px', color: '#0277bd' }} />Tema de debate</h4>
      <p>Luego de la clase 1, interpelamos nuestro rol de futuros ingeneiros en sistemas para analizar y debatir sobre la siguiente pregunta disparadora <strong>¿El software es único? ¿Cómo se puede comparar con otros productos de diferentes procesos de ingeniería?</strong></p>
      <h4> <FontAwesomeIcon icon="lightbulb" style={{ marginRight: '6px', color: '#fbc02d' }} />
      Mi participacion</h4>
      <p>Sí, para mí el software es único porque no se parece a los productos físicos, no se fabrica ni se toca, se crea con lógica, análisis y mucho trabajo mental. Lo loco es que siempre puede cambiar ya que se actualiza, se mejora o se adapta según lo que se necesite, de hecho, a veces con una sola línea de código podés cambiar todo, y eso no pasa en otras ingenierías. Es más como una idea que va evolucionando, no algo terminado y estático.</p>
      <hr></hr>
    </>
    ),
    /*enlace: "https://drive.google.com/unidad1-documentos"*/
  },
  {
    titulo: "Clase 2 - Introducción a la Ingeniería de Requerimientos",
    imagen: imagenes.unidad2,
    contenido: (
      <>

      <h3>
        <FontAwesomeIcon icon="file-lines" style={{ marginRight: '8px', color: '#792aa9ff' }} />
        Ingeniería de Requerimientos</h3>
      
      <p>
        En esta clase vimos qué es la Ingeniería de Requerimientos y por qué es una de las partes más complejas del desarrollo de software. Se discutieron problemas como la complejidad, conformidad, modificabilidad e invisibilidad, que dificultan tanto la comprensión como la construcción de los sistemas.
      </p>
      <p>
        Se explicó que el uso de modelos es fundamental, ya que permiten representar y abstraer distintas partes de la realidad, facilitando la planificación y el desarrollo. Aprendimos que un desarrollo puede entenderse como una serie de transformaciones que va desde modelos informales hasta el código implementado, y que la abstracción ayuda a manejar mejor esa complejidad.
      </p>
      <p>
        Una de las frases que más se destacó fue de Brooks: “Lo más difícil de construir un sistema es decidir exactamente qué construir”. Eso nos llevó a ver lo difícil que puede ser obtener requerimientos claros y completos desde el principio. También analizamos cómo el contexto organizacional y la buena comunicación entre usuarios y desarrolladores son claves para lograr buenos resultados.
      </p>
      <p>
        Además, se introdujo el término stakeholders para referirse a todas las personas interesadas o afectadas por el sistema. Por último, trabajamos el concepto de “contrato social de los requerimientos”, donde se establecen los derechos y deberes tanto de usuarios como de analistas para que el trabajo conjunto sea claro y respetuoso.
      </p>
      <hr></hr>
      <h3><FontAwesomeIcon icon="tasks" style={{ marginRight: '8px', color: '#388e3c' }} />
        Trabajo de Investigación</h3>
      <p>
        En esta actividad individual se nos pidió seleccionar un trabajo de investigación relacionado con la Ingeniería de Requerimientos y el Lenguaje Natural. La consigna consistía en recuperar información clave del documento elegido, como el resumen, la fecha de publicación, la institución, universidad, autor y el enlace al texto completo.</p>

      <p>Para ello, realicé una búsqueda en portales como Google Académico y seleccioné un trabajo reciente que puede ser utilizado como antecedente o Estado del Arte en una tesis o investigación académica.</p>

      <p>El objetivo de esta actividad es afianzar el conocimiento en el campo de la Ingeniería de Requerimientos, explorando cómo se vincula con el Lenguaje Natural, además de fortalecer la capacidad de análisis y búsqueda de fuentes confiables.
      </p>
      <p><FontAwesomeIcon icon="book" style={{ marginRight: '8px', color: '#792aa9ff' }} />Podés ver el PDF completo del trabajo seleccionado a continuación:</p>
      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/1W9mWdQQMRJ_BK5Y-XUZzOI8jLgmIt6Io/preview"
          width="100%"
          height="500"
          allow="autoplay"
          title="PDF Actividad Unidad 1"
        ></iframe>
      </div>
      <hr></hr>
      <h3>Debate de cierre de la clase 2</h3>
      <h4><FontAwesomeIcon icon="comments" style={{ marginRight: '8px', color: '#0277bd' }} />Tema de debate</h4>
      <p>Como actividad de cierre, los invitamos a participar del foro de debates, a partir de la siguiente pregunta disparadora: <strong>¿Qué importancia le da a la calidad de software dentro del concepto de desarrollo?</strong></p>
      <h4> <FontAwesomeIcon icon="lightbulb" style={{ marginRight: '6px', color: '#fbc02d' }} />
      Mi participacion</h4>
      <p>Para mí, la calidad del software es algo clave en todo desarrollo. No alcanza con que una aplicación simplemente funcione, también tiene que ser estable, fácil de usar y responder bien en diferentes situaciones. Si se dejan de lado esos aspectos, lo más probable es que más adelante aparezcan errores o sea difícil hacerle cambios.</p>

      <p>Además, cuando se trabaja con calidad desde el principio, se nota en el producto final: es más confiable, más fácil de mantener y mejora mucho la experiencia del usuario. También hace que el equipo trabaje mejor, porque hay menos problemas y todo está más claro.</p>
      <hr></hr>
      </>
      
    ),
    
  },
   {
    titulo: "Clase 3 - Requerimientos y ciclos de vida",
    imagen: imagenes.unidad3,
    contenido: (
      <>

      <h3><FontAwesomeIcon icon="file-lines" style={{ marginRight: '8px', color: '#6a1b9a' }} />
      Los requerimientos en el Ciclo de Vida de Desarrollo de Software </h3>
      <p>En esta clase analizamos cómo influyen los requerimientos a lo largo del ciclo de vida del software y cómo distintos enfoques afectan el producto final.</p>
      
      <h4><FontAwesomeIcon icon="book" style={{ marginRight: '6px', color: '#3949ab' }} />Ciclo Tradicional (RUP)</h4>
      <p>Modelo en cascada, iterativo e incremental. Documentación exhaustiva, ideal para proyectos grandes pero poco flexible ante cambios.</p>
      
      <h4><FontAwesomeIcon icon="tasks" style={{ marginRight: '6px', color: '#388e3c' }} />Scrum</h4>
      <p>Marco ágil. Se prioriza el software funcionando. Uso de sprints, backlog y roles definidos. Más dinámico y adaptable.</p>

      <h4><FontAwesomeIcon icon="lightbulb" style={{ marginRight: '6px', color: '#fbc02d' }} />Giro Copernicano</h4>
      <p>Pasamos de enfoques predictivos (como RUP) a adaptativos (como Scrum), cambiando el foco de alcance fijo a flexibilidad en función del tiempo y recursos.</p>
      
      <h4><FontAwesomeIcon icon="code" style={{ marginRight: '6px', color: '#00838f' }} />Otros Modelos: </h4>
      <ul>
        <p><FontAwesomeIcon icon="circle-check" style={{ marginRight: '10px', color: '#2d4140ff' }} />Modelo en V</p>
        <p><FontAwesomeIcon icon="circle-check" style={{ marginRight: '10px', color: '#2d4140ff' }} />Equipos distribuidos</p>
        <p><FontAwesomeIcon icon="circle-check" style={{ marginRight: '10px', color: '#2d4140ff' }} />CMMI</p>
      </ul>

      <h4> <FontAwesomeIcon icon="comments" style={{ marginRight: '6px', color: '#7b1fa2' }} />Calidad y Gestión de Requerimientos</h4>
      <p>Una buena definición de requerimientos impacta en el éxito del proyecto. Errores detectados tarde son más costosos.</p>
      
      <p><FontAwesomeIcon icon="file-lines" style={{ marginRight: '8px', color: '#6a1b9a' }} />Según el <strong>Chaos Report</strong> del Standish Group, los factores clave para el éxito de un proyecto son:</p>
      <ul>
        <p><FontAwesomeIcon icon="circle-check" style={{ marginRight: '10px', color: '#2d4140ff' }} />Involucramiento de usuarios</p>
        <p><FontAwesomeIcon icon="circle-check" style={{ marginRight: '10px', color: '#2d4140ff' }} />Apoyo gerencial</p>
        <p><FontAwesomeIcon icon="circle-check" style={{ marginRight: '10px', color: '#2d4140ff' }} />Requerimientos claros</p>
        <p><FontAwesomeIcon icon="circle-check" style={{ marginRight: '10px', color: '#2d4140ff' }} />Planificación y expectativas realistas</p>
      </ul>
      <h4>⚠️ Costo de los errores</h4>
      <p>Cuanto más tarde se detectan los errores de requerimientos, más caro resulta corregirlos. Muchas veces, errores que se podrían haber evitado con una buena especificación terminan saliendo a la luz recién en los tests finales.</p>
      <hr></hr>
      <h3><FontAwesomeIcon icon="tasks" style={{ marginRight: '8px', color: '#388e3c' }} />
        Actividad Grupal – Análisis de Metodologías de Desarrollo  y su Relación con la Ingeniería de Requerimientos</h3>
      <p>
        Realizamos este trabajo en grupo con mis compañeros, para analizar cómo distintas metodologías de desarrollo (tradicionales, ágiles y de madurez) abordan la Ingeniería de Requerimientos. A lo largo del video explicamos cómo se definen y gestionan los requerimientos en cada modelo, destacando herramientas, ventajas, desventajas y ejemplos.</p>
      <p><strong>Integrantes del grupo 8:</strong> Lara Belaitx Candia, Micaela Corbellini, Luis Felipe Guillen Marquez, Luciana Belén Impollino, Esteban Regueira.</p>

      <p>🎥En el siguiente video vas a encontrar una presentación narrada que resume los principales puntos analizados.</p>
      <div className="flex justify-center my-6">
        <iframe 
          width="100%" 
          height="400" 
          src="https://drive.google.com/file/d/17nKbvgWaRUcCMPdG5fMNQOhW-5MEeQiE/preview" 
          allow="autoplay">
        </iframe>

      </div>
      <hr></hr>
      </>
      
    ),
    
  },
   {
    titulo: "Clase 4 - Requerimientos e Ingeniería de Requerimientos",
    imagen: imagenes.unidad4,
    contenido: (
    <>
      <h3>
        <FontAwesomeIcon icon="file-lines" style={{ marginRight: '8px', color: '#792aa9ff' }} />
        Perspectiva Organizacional, Elicitación y Análisis</h3>
      
      <p>
        En esta clase profundizamos el rol de la Ingeniería de Requerimientos desde una mirada organizacional y técnica. Se abordó el concepto de elicitación, entendido como el proceso de obtención de necesidades desde el usuario hacia los modelos de software, destacando su naturaleza social, iterativa y no lineal.
      </p>
      <p><FontAwesomeIcon icon="lightbulb" style={{ marginRight: '8px', color: '#ff9800' }} />
        Se analizó cómo los requerimientos son la base del desarrollo exitoso, permitiendo al sistema cumplir con objetivos, incluso cuando los usuarios no los tienen completamente claros desde el inicio. Se trabajó sobre la importancia de la especificación de requerimientos (SRS) y su expresión en formatos variados: desde lenguaje natural a estructuras formales.
      </p>
      <p>
        <FontAwesomeIcon icon="book" style={{ marginRight: '8px', color: '#1976d2' }} />
        Además, se presentó el alcance de la Ingeniería de Requerimientos, su dimensión cognitiva y social, y su relación directa con actividades como la validación, documentación y análisis en contextos organizacionales cambiantes. Se discutió la diferencia entre requerimientos funcionales y no funcionales, y cómo ambos deben contemplarse para un diseño robusto.
      </p>
      <p>
        Este conocimiento fue complementado con material audiovisual y gráficos explicativos que muestran la relación entre requerimientos, sistema y entorno, proporcionando una visión integral para el análisis en profundidad.
      </p>
      <hr></hr>
      <h3><FontAwesomeIcon icon="tasks" style={{ marginRight: '8px', color: '#388e3c' }} />
        Trabajo Práctico Grupal – Identificación de Requerimientos y Stakeholders</h3>
      <p>
        En este trabajo grupal analizamos el sistema de biblioteca de una Facultad de Informática, en el marco del estudio de la Ingeniería de Requerimientos. El objetivo fue aplicar conceptos de necesidades, deseos y expectativas, así como diferenciar entre requerimientos del usuario y del sistema. Además, identificamos a los principales <strong>stakeholders</strong> del sistema, considerando sus roles e intereses dentro del desarrollo.
      </p>

      <p>
        Este ejercicio nos permitió aplicar de forma práctica los conocimientos adquiridos en la clase, y trabajar colaborativamente en la elaboración de ejemplos reales y contextualizados.
      </p>

      <p><strong>👥Integrantes del grupo 8:</strong> Lara Belaitx Candia, Micaela Corbellini, Luis Felipe Guillen Marquez, Luciana Belén Impollino, Esteban Regueira.</p>
      <p><FontAwesomeIcon icon="book" style={{ marginRight: '8px', color: '#792aa9ff' }} />Podés ver el PDF completo de la actividad reazlizada a continuación:</p>
      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/1BKrDnhGwuwpno1mJb970UWv1xVIDGi4V/preview"
          width="100%"
          height="500"
          allow="autoplay"
          title="PDF Actividad Unidad 1"
        ></iframe>
      </div>
      <hr></hr>
      <h3><FontAwesomeIcon icon="tasks" style={{ marginRight: '8px', color: '#388e3c' }} />TP Cursada - Primera Entrega: Enunciado</h3>
      <p>📚 Este trabajo fue realizado en grupo durante la cursada de la materia Ingeniería de Requerimientos. Se abordó el análisis, modelado y especificación de requisitos para un sistema de reservas orientado a espacios de coworking.</p>

      <p>En esta primera entrega se trabajó sobre el dominio del problema, identificando el contexto inicial, los actores involucrados y los procesos que el sistema deberá cubrir.
      Próximas entregas abordarán la identificación de stakeholders, sus motivaciones, las necesidades funcionales y no funcionales del sistema, y los requerimientos de usuario y sistema.</p>
      <p><strong>👥Integrantes del grupo 8:</strong> Lara Belaitx Candia, Micaela Corbellini, Luis Felipe Guillen Marquez, Luciana Belén Impollino, Esteban Regueira.</p>
      <p>🖇️ Ver documento PDF con el detalle completo del enunciado del proyecto a continuación:</p>
      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/148UzKCp3yOpaxKxla6lwX8ft9JO_DUGp/preview"
          width="100%"
          height="500"
          allow="autoplay"
          title="PDF Actividad Unidad 1"
        ></iframe>
      </div>
      <hr></hr>
      <h3>
      Debate de cierre de la Clase 4</h3>
      <h4><FontAwesomeIcon icon="comments" style={{ marginRight: '8px', color: '#0277bd' }} />Tema de debate</h4>
      <p>A partir del siguiente foro (de participación obligatoria) desarrollaremos entre todos una respuesta formal a la siguiente pregunta disparadora: <strong>¿Por qué cree que la Ingeniería de Requerimientos tiene un enfoque tan social?</strong></p>
      <h4> <FontAwesomeIcon icon="lightbulb" style={{ marginRight: '6px', color: '#fbc02d' }} />
      Mi participacion</h4>
      <p>Tiene un enfoque social porque se basa en entender lo que necesitan las personas que van a usar el sistema, no es solo algo técnico, hay que hablar con los usuarios, interpretar lo que quieren decir y llegar a acuerdos, ya que aveces los requerimientos no están claros al principio, por eso es clave comunicarse bien y saber escuchar, sin esa parte social, es difícil que el sistema cumpla realmente con lo que se espera.</p>
      <hr></hr>
    </>
    ),
  },
     {
    titulo: "Clase 5 - Procesos de la Ingeniería de Requerimientos",
    imagen: imagenes.unidad5,
    contenido: (
    <>
      <h3>
        <FontAwesomeIcon icon="file-lines" style={{ marginRight: '8px', color: '#792aa9ff' }} />
        Procesos Claves</h3>
      
      <p>
        En esta clase analizamos los procesos clave que conforman la Ingeniería de Requerimientos: <strong>elicitación, especificación y validación</strong>. Aprendimos que tener un proceso claro nos permite tomar decisiones más acertadas, sobre todo cuando surgen imprevistos.
      </p>
      <p><FontAwesomeIcon icon="lightbulb" style={{ marginRight: '8px', color: '#ff9800' }} />
        A través del modelo de Loucopoulos, entendimos cómo fluye la información entre estos procesos y la importancia de gestionar adecuadamente cada etapa. También exploramos otros modelos, como SWEBOK y BABOK, que incorporan subprocesos como la negociación y la comunicación de requerimientos, dándonos una visión más completa del análisis del negocio.
      </p>
      <p>
        <FontAwesomeIcon icon="book" style={{ marginRight: '8px', color: '#1976d2' }} />
        Además, se contrastaron los enfoques tradicionales con las metodologías ágiles, donde los requerimientos se abordan de manera iterativa e incremental, reduciendo la documentación formal y poniendo foco en entregables funcionales. Estudiamos cómo una épica se transforma en historias de usuario y luego en tareas más detalladas.
      </p>
      <p>
        Finalmente, se abordó el concepto de gestión de requerimientos, esencial para lidiar con el cambio constante y mantener la trazabilidad de lo que se necesita construir.
      </p>
      <p>🖇️Si desea ver información más detalladada sobre los temas mencionados, en el PDF siguiente se muestran con más profundidad.</p>
      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/1-B_2uysxuhYx178i2au0GbtBAqzBZpZz/preview"
          width="100%"
          height="500"
          allow="autoplay"
          title="PDF Actividad Unidad 1"
        ></iframe>
      </div>

      <hr></hr>
    </>
    ),
  },
];


const Requerimientos = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [unidadSeleccionada, setUnidadSeleccionada] = useState(null);

  const abrirModal = (unidad) => {
    setUnidadSeleccionada(unidad);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setUnidadSeleccionada(null);
  };

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
            <UnidadCard
              key={index}
              titulo={unidad.titulo}
              imagen={unidad.imagen}
              onClick={() => abrirModal(unidad)}
            />
          ))}
        </div>
      </main>

      <Modal
        isOpen={modalAbierto}
        onClose={cerrarModal}
        titulo={unidadSeleccionada?.titulo}
        imagen={unidadSeleccionada?.imagen}
        contenido={unidadSeleccionada?.contenido}
        enlace={unidadSeleccionada?.enlace}
      />

      <footer>
        <p>© 2025 Luis Felipe Guillén Márquez - Portfolio académico</p>
      </footer>
    </>
  );
};

export default Requerimientos;
