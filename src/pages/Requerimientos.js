// pages/Requerimientos.jsx
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import UnidadCard from '../components/UnidadCard';
import Modal from '../components/Modal';
import './Requerimientos.css';
import { imagenes } from '../assets/multimedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

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
      <hr className="linea-separadora" />
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
  {
    titulo: "Clase 6 - Obtención de requerimientos | parte 1",
    imagen: imagenes.unidad6,
    contenido: (
    <>
      <h3>
        <FontAwesomeIcon icon="file-lines" style={{ marginRight: '8px', color: '#792aa9ff' }} />
        Técnicas para la Obtención de Requerimientos</h3>
      
      <p>
        En esta clase comenzamos a estudiar en profundidad el proceso de elicitación de requerimientos, entendida como la actividad de adquirir y obtener el conocimiento necesario para entender un dominio de problema. Este proceso es clave en la Ingeniería de Requerimientos, ya que sin una comprensión clara del dominio no es posible desarrollar un sistema consistente ni completo.
      </p>
      <p>
        🔍 Se analizaron los problemas frecuentes en esta etapa: el conocimiento suele estar disperso, en conflicto o implícito, y muchas veces depende de expertos humanos que tienen dificultades para transmitirlo. También influyen factores como los sesgos de los usuarios, del analista y los cambios constantes en el entorno de negocio.
      </p>
      <p>🧠 A partir de esto, se abordaron distintas técnicas de elicitación, principalmente las propuestas por Loucopoulos, entre las que se encuentran:</p>

      <p><FontAwesomeIcon icon="circle-check" style={{ marginRight: '10px', color: '#2d4140ff' }} />Partir del usuario (entrevistas, encuestas, brainstorming)</p>
      <p><FontAwesomeIcon icon="circle-check" style={{ marginRight: '10px', color: '#2d4140ff' }} />Análisis de objetivos y metas</p>
      <p><FontAwesomeIcon icon="circle-check" style={{ marginRight: '10px', color: '#2d4140ff' }} />Escenarios</p>
      <p><FontAwesomeIcon icon="circle-check" style={{ marginRight: '10px', color: '#2d4140ff' }} />Análisis de formularios</p>
      <p><FontAwesomeIcon icon="circle-check" style={{ marginRight: '10px', color: '#2d4140ff' }} />Reutilización de requerimientos</p>
      <p><FontAwesomeIcon icon="circle-check" style={{ marginRight: '10px', color: '#2d4140ff' }} />Lenguaje natural</p>
      <p><FontAwesomeIcon icon="circle-check" style={{ marginRight: '10px', color: '#2d4140ff' }} />Análisis de tareas</p>
      <p>
        📋 Se hizo foco en las entrevistas como una herramienta central para obtener información, explicando cómo deben planificarse, conducirse y validarse correctamente para que el conocimiento obtenido sea útil y confiable.
      </p>
      <hr></hr>
      <h3><FontAwesomeIcon icon="tasks" style={{ marginRight: '8px', color: '#388e3c' }} />
        Actividad Grupal – Ejercitación Práctica: Especificación de Requerimientos</h3>
      <p>
        En esta actividad grupal abordamos un ejercicio práctico orientado a la correcta especificación de requerimientos funcionales y no funcionales para el desarrollo de una aplicación móvil de una empresa de bicicletas compartidas. A partir de un caso planteado, se trabajó en la redacción formal de requerimientos, la detección y corrección de ambigüedades, y la elaboración de un mini glosario técnico, con el objetivo de aplicar buenas prácticas en Ingeniería de Requerimientos y fortalecer su vínculo con etapas posteriores del desarrollo de software.
      </p>

      <p><strong>👥Integrantes del grupo 8:</strong> Lara Belaitx Candia, Micaela Corbellini, Luis Felipe Guillen Marquez, Luciana Belén Impollino, Esteban Regueira.</p>
      <p><FontAwesomeIcon icon="book" style={{ marginRight: '8px', color: '#792aa9ff' }} />Podés ver el PDF completo de la actividad reazlizada a continuación:</p>
      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/16UhZoNQbxzbWN3Ll0NDBwHw8_cLydVho/preview"
          width="100%"
          height="500"
          allow="autoplay"
          title="PDF Actividad Unidad 1"
        ></iframe>
      </div>
      <hr></hr>
      <h3>
      Foro de debate de la clase 6</h3>
      <h4><FontAwesomeIcon icon="comments" style={{ marginRight: '8px', color: '#0277bd' }} />Tema de debate</h4>
      <p>Si tuviera que resolver un problema del cual dependiese mi vida y tengo 60 minutos para resolverlo, <strong>¿ como dedicaría el tiempo para resolverlo ?</strong>
      <ol style={{marginLeft:"30px"}}>
        <li>40 minutos para estudiarlo</li>
        <li>15 minutos para revisarlo</li>
        <li>5 minutos para solucionarlo</li>
      </ol>
      <strong>¿Por qué piensan que debería ser así?</strong> Lo debatiremos al final de la clase, en el foro propuesto.</p>
      <h4> <FontAwesomeIcon icon="lightbulb" style={{ marginRight: '6px', color: '#fbc02d' }} />
      Mi participacion</h4>
      <p>Creo que sin dudas dedicaria la mayor parte del tiempo a entender bien de que se trata, la mayoria de las veces nos apuramos en encontrar una solucion sin tener claro el problema y eso suele llevar a errores o decisiones apresuradas, por eso usaria 40 minutos para analizarlo bien, tratar de ver todos los angulos posibles y entender realmente que esta en juego, despues me tomaria 15 minutos para repasar lo pensado y ver si no se me escapo algo o si hay una forma mejor de encararlo, luego cuando ya este seguro, usaria los ultimos 5 minutos para resolverlo, ya que aveces, en situaciones limites pensar con calma es lo que te puede salvar.</p>
      <hr></hr>
    </>
    ),
  },
  {
    titulo: "Clase 7 - Obtención de requerimientos | parte 2",
    imagen: imagenes.unidad7,
    contenido: (
    <>
      <h3>
        <FontAwesomeIcon icon="file-lines" style={{ marginRight: '8px', color: '#792aa9ff' }} />
        Continuamos con técnicas para obtener requerimientos</h3>
      
      <p>
        En esta clase seguimos viendo distintas formas de obtener requerimientos. Además de lo que ya vimos con Loucopoulos, se suman nuevas estrategias como analizar metas y objetivos, revisar formularios existentes, usar lenguaje natural, reusar requerimientos y analizar tareas. También se ven métodos grupales como prototipos, encuestas, brainstorming y casos de uso. Se toma material de otros autores como Young y Nuseibeh-Easterbrook, que aportan más herramientas útiles para entender bien qué necesitan los usuarios y el sistema.
      </p>
      <p>🖇️Si desea ver información más detalladada sobre las técnicas mencionadas, en el PDF siguiente se muestran con más profundidad.</p>
      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/16TxAFwT2fPHjEJrYet24jTZlOiqxdPr8/preview"
          width="100%"
          height="500"
          allow="autoplay"
          title="PDF Actividad Unidad 1"
        ></iframe>
      </div>
      <hr></hr>
      <h3>
      Debate de cierre de clase 7</h3>
      <h4><FontAwesomeIcon icon="comments" style={{ marginRight: '8px', color: '#0277bd' }} />Tema de debate</h4>
      <p>Le proponemos el siguiente foro de debate (obligatorio) a fin de construir conocimiento de manera colaborativa. Como disparador, proponemos la siguiente pregunta: <strong>¿Cuál es la tecnica de "elicitación" que usted utilizaria (según el contexto) y por qué?</strong></p>
      <h4> <FontAwesomeIcon icon="lightbulb" style={{ marginRight: '6px', color: '#fbc02d' }} />
      Mi participacion</h4>
      <p>Yo elegiria hacer una observacion directa, sobre todo si se puede ver como la persona trabaja o usa el sistema en el dia a dia, ya que en algunos caso cuando uno entrevista a alguien, esa persona no siempre sabe explicar con claridad lo que se necesita o tal vez se le escapan cosas que hace de forma automatica, en cambio, si uno observa, puede que note detalles que no salen en una charla, ejemplo, si una persona pierde tiempo repitiendo un paso o si hace clic en muchos lados para llegar a lo que busca, eso te da una idea clara de por donde mejorar, me parece util cuando no se tiene mucha informacion o cuando se quiere ver la experiencia real del usuario</p>
      <hr></hr>
    </>
    ),
  },
  {
    titulo: "Clase 8 - Actividad Grupal e Individual",
    imagen: imagenes.unidad8,
    contenido: (
    <>
      <h3>
        👥 Actividad Grupal - Trabajo de Investigación</h3>
      
      <p>
        <h4><FontAwesomeIcon icon="book" style={{ marginRight: '8px', color: '#792aa9ff' }} />Análisis de técnicas reales de elicitación de requerimientos</h4>
        En esta actividad grupal analizamos un artículo académico que investiga cómo se usan las distintas técnicas de elicitación de requerimientos en el mundo real. El estudio se hizo con estudiantes de posgrado que trabajan en desarrollo de software, y muestra cuáles son las técnicas más usadas (como entrevistas, brainstorming y análisis de documentos) y de dónde se sacan los requerimientos (formularios, software previo, entrevistas, etc.).
      </p>
      <p>
        Además, se comparan distintas formas de clasificar estas técnicas y se revisa qué tan frecuente es su uso en la práctica. Esto nos permitió no solo ver la teoría, sino entender cómo se aplican estas herramientas en proyectos reales, y qué desafíos aparecen según el contexto o la experiencia del equipo.
      </p>
      <p>🖇️ En el PDF que sigue detallamos lo que analizamos como grupo sobre este artículo.</p>
      <p><strong>👥Integrantes del grupo 8:</strong> Lara Belaitx Candia, Micaela Corbellini, Luis Felipe Guillen Marquez, Luciana Belén Impollino, Esteban Regueira.</p>
      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/14THA8mjjJKV8slwCQWZapu9qYjkaX24p/preview"
          width="100%"
          height="500"
          allow="autoplay"
          title="PDF Actividad Unidad 1"
        ></iframe>
      </div>
      <hr></hr>
      <h3>🧠 Trabajo Investigación – Propuesta de proceso de elicitación con enfoque en Design Thinking</h3>
      <p>
        En este trabajo individual analicé un artículo que aborda los problemas más comunes en la etapa de elicitación de requerimientos, como la falta de claridad en los procesos del negocio, la complejidad entre las partes involucradas y la poca transparencia en los sistemas.
      </p>
      <p>
        El enfoque planteado propone aplicar un proceso basado en Design Thinking, dividido en tres pasos clave: empatizar, sintetizar e idear. Para validar la propuesta, los autores realizaron un focus group con expertos en el área, quienes destacaron especialmente el rol de la empatía como una herramienta valiosa para comprender mejor las necesidades del usuario.
      </p>
      <p>
        Este proceso no solo busca mejorar la calidad de los requerimientos, sino también adaptarse a distintos contextos y evolucionar con el tiempo según la retroalimentación obtenida.
      </p>
      <p>
        🖇️ Podés ver el PDF completo de la actividad reazlizada a continuación:
      </p>
      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/1J_Kh3CSSqWjcZnuWMPF78eS1B1Kv_vJM/preview"
          width="100%"
          height="500"
          allow="autoplay"
          title="PDF Actividad Unidad 1"
        ></iframe>
      </div>
      <h3>
      🎙️ Entrega 2 – Stakeholders, Requisitos y Podcast: "Reservas al Futuro"</h3>
      <p>En esta segunda entrega del trabajo grupal continuamos desarrollando el sistema de reservas para espacios de coworking. Retomamos el enunciado inicial para profundizar en la identificación de los principales <strong>stakeholders</strong>, sus <strong>motivaciones</strong> y <strong>características</strong>. También elaboramos un <strong>léxico específico</strong> y definimos reglas de negocio realistas para garantizar coherencia y claridad en el sistema.</p> <p>Como parte del trabajo práctico, grabamos el primer episodio del <strong>“Podcast del Ingeniero”</strong> titulado <em>“Reservas al Futuro – Diseñando espacios compartidos”</em>, donde compartimos el análisis, decisiones y aprendizajes del grupo en este proceso.</p> <p>
      🎧 Escuchá el episodio aquí: <strong><em>Reservas al futuro – Entre líneas y Requisitos (Episodio 1)</em></strong></p>
      <div className="pdf-container">
        <iframe 
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/episode/7tzcxkke0sMq7ehLMIah5Y?utm_source=generator"
          width="100%" 
          height="152" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          title="Podcast Reservas al Futuro"
        ></iframe>
      </div>

       <p>📷 La imagen representativa del episodio fue creada con inteligencia artificial y muestra un entorno de coworking moderno, reflejando los valores de comunidad, tecnología y experiencia de usuario trabajados en este proyecto.</p>
      <p>🖇️Si desea ver la información más detallada, en el PDF siguiente se mostrarán los temas con mayor profundidad.</p>
      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/1oBpj81HLUdQ9_xzHW4hn2Y5sR29M6RLS/preview"
          width="100%"
          height="500"
          allow="autoplay"
          title="PDF Actividad Unidad 1"
        ></iframe>
      </div>
      <hr></hr>
      <h3>🤖 Actividad: Conversación con IA - Proyecto Mercury S.A.</h3>

      <p>
        En esta actividad asumí el rol de <strong>Analista Funcional</strong> para la empresa <strong>Mercury S.A.</strong>, que busca desarrollar una aplicación móvil para que sus clientes puedan seguir en tiempo real sus pedidos, gestionar reclamos y evaluar el servicio recibido.
      </p>

      <p>
        A través de una conversación simulada con el actor principal (Martín Ferraro, generado por IA), llevé adelante una entrevista completa con el objetivo de <strong>elicitación de requerimientos</strong>. Hice preguntas enfocadas en funcionalidades, usabilidad, accesos, métricas y experiencias esperadas por los usuarios.
      </p>

      <p>
        Durante la charla, apliqué conceptos clave de la materia como <strong>requerimientos funcionales y no funcionales</strong>, técnicas de entrevista, identificación de prioridades del cliente, <strong>ambigüedades</strong> y detección de posibles <strong>conflictos entre deseos e implementaciones</strong>.
      </p>

      <p>
        Esta experiencia me permitió poner en práctica no solo el contenido técnico de Ingeniería de Requerimientos, sino también habilidades blandas como <strong>escucha activa, empatía y claridad comunicacional</strong>.
      </p>

      <p>
        🖇️En breve se podrá acceder al documento PDF de Informe de análisis de la entrevista
      </p>

      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/1x5zCZzrvx4XNkTWvvJKIAbEzk9EVc42K/preview"
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
  {
    titulo: "Clase 9 - Especificación de los requerimientos",
    imagen: imagenes.unidad9,
    contenido: (
    <>
      <h3>
        <FontAwesomeIcon icon="file-lines" style={{ marginRight: '8px', color: '#792aa9ff' }} />
        Especificaciónn de requerimientos de software (SRS)</h3>
      
      <p>
        Durante esta clase estuvimos viendo la importancia de documentar correctamente los requerimientos de un sistema. En este caso, nos enfocamos en la SRS (Software Requirements Specification), que básicamente actúa como un contrato entre el cliente y el desarrollador. El documento sirve como guía para el diseño, testing y mantenimiento, y debe ser claro, completo y verificable.
      </p>

      <p>
        La SRS tiene beneficios importantes: ayuda a reducir tiempos, a dejar todo por escrito desde el principio, y facilita futuras mejoras. Además, sirve para estimar con más precisión el tiempo y el costo del desarrollo.
      </p>

      <p>📚 Tipos de requerimientos:</p>
      <ul className="list-disc list-inside pl-2">
        <li><strong>Funcionales:</strong> lo que el sistema debe hacer.</li>
        <li><strong>No funcionales:</strong> calidad, seguridad, disponibilidad, etc.</li>
        <li><strong>De negocio:</strong> restricciones impuestas por el entorno empresarial.</li>
      </ul>

      <p>✅ Características de una buena SRS (según IEEE 830):</p>
      <ul className="list-disc list-inside pl-2">
        <li><strong>Correcta:</strong> cada requerimiento debe poder cumplirse.</li>
        <li><strong>No ambigua:</strong> debe tener una única interpretación.</li>
        <li><strong>Completa:</strong> incluye todas las entradas, salidas y respuestas.</li>
        <li><strong>Consistente:</strong> sin conflictos entre requerimientos.</li>
        <li><strong>Rankeada:</strong> por prioridad (esencial, condicional, opcional).</li>
        <li><strong>Verificable:</strong> todo se debe poder comprobar.</li>
        <li><strong>Modificable:</strong> fácil de actualizar sin romper nada.</li>
        <li><strong>Rastreable:</strong> se debe poder ver el origen y destino de cada requerimiento.</li>
      </ul>

      <p>📦 Estructura típica (IEEE 830):</p>
      <ul className="list-disc list-inside pl-2">
        <li><strong>Introducción:</strong> propósito, alcance, definiciones.</li>
        <li><strong>Descripción general:</strong> contexto, funciones, usuarios, restricciones.</li>
        <li><strong>Requerimientos específicos:</strong> inputs, outputs, performance, atributos, etc.</li>
      </ul>

      <p>
        Algo que me pareció clave es el tema de la <strong>rastreabilidad</strong>, porque nos permite hacer seguimiento hacia atrás (para saber de dónde viene un requerimiento) y hacia adelante (para ver qué parte del sistema lo implementa).
      </p>

      <p>
        También se mencionó que en enfoques ágiles se prioriza mucho entender no solo qué hace el sistema, sino <strong>para qué</strong>, ya que eso conecta los requerimientos con los objetivos reales del negocio.
      </p>
      <p>🖇️En el siguiente PDF se muestran con más detalles sobre como se deberia construir un buen documento de <strong>Requisitos</strong> según el estandar IEEE 830.</p>
      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/1y8l9w9vlZTLSyNfsY1Sl1Ng9r5Zby3hV/preview"
          width="100%"
          height="500"
          allow="autoplay"
          title="PDF Actividad Unidad 1"
        ></iframe>
      </div>
      <hr></hr>
      <h3>
      Debate de cierre de clase 9 - Ejercitación obligatoria</h3>
      <h4><FontAwesomeIcon icon="comments" style={{ marginRight: '8px', color: '#0277bd' }} />Tema de debate</h4>
      <p>Según su experiencia y/o relevamiento de la literatura, haga una contribucion a lo visto en los videos de teoria, indicando y describiendo: </p>
      <ul className="list-disc list-inside pl-2">
        <li>Caracteristicas que los requerimientos deben satisfacer</li>
        <li>Justifique su elección</li>
      </ul>
      <h4> <FontAwesomeIcon icon="lightbulb" style={{ marginRight: '6px', color: '#fbc02d' }} />
      Mi participacion</h4>
      <p>Primero, que sean "claros y sin ambigüedades", ya que un requerimiento se puede interpretar de varias formas, es muy probable que el equipo termine implementando algo distinto a lo que el usuario realmente queria, por eso es importante usar un lenguaje entendible para todos los involucrados, sin tecnicismos innecesarios si no hacen falta, otra caracteristica clave es que sean "completos", o sea, que incluyan todos los casos posibles, tanto los escenarios normales como los errores o situaciones no esperadas. Muchas veces pasa que el cliente no piensa en todo y despues aparecen cosas que no estaban previstas, cuando eso sucede se generan retrasos, cambios de ultimo momento y confusión.</p>
      <p>También me parece importante que los requerimientos esten "priorizados", ya que no todo lo que el cliente pide tiene el mismo nivel de urgencia, a veces se mezclan funciones esenciales con cosas que son más “lindas de tener” que necesarias, ponerle un orden a eso ayuda un monton a organizar el trabajo y evitar invertir tiempo en funcionalidades que pueden esperar o directamente no hacen falta.</p>
      <p>Por ultimo, algo que no siempre se tiene en cuenta y para mí es fundamental, es que los requerimientos sean "realizables", ya que de nada sirve que esten bien escritos si despues no se pueden implementar con el tiempo, por falta de recursos o tecnologias disponibles, tiene que haber un equilibrio entre lo que se desea y lo que realmente se puede hacer.</p>
      <hr></hr>
    </>
    ),
  },
  {
    titulo: "Clase 10 - Uso del Lenguaje Natural",
    imagen: imagenes.unidad10,
    contenido: (
    <>
      <h3>
        <FontAwesomeIcon icon="file-lines" style={{ marginRight: '8px', color: '#792aa9ff' }} />
       Uso del Lenguaje Natural en Especificaciones</h3>
      
      <p> 📚
        Durante esta clase entendimos la importancia del lenguaje natural al momento de especificar requerimientos. Aprendimos que aunque es el lenguaje más usado para comunicarnos, puede generar ambigüedades si no se utiliza de forma precisa. Vimos cómo distintas personas (desarrolladores, clientes, analistas) pueden interpretar una misma frase de manera diferente, dependiendo de su conocimiento previo, su contexto o el dominio en el que trabajan.
      </p>

      <p>
        Un ejemplo claro fue cómo una misma palabra, como nieve, puede tener múltiples significados según quién la utilice o en qué situación. Eso demuestra que para poder especificar correctamente, es fundamental hablar el mismo lenguaje del cliente y conocer a fondo el dominio del problema.
      </p>

      <p>También vimos que el lenguaje evoluciona: pasamos de las señas, al lenguaje hablado, a la escritura. Esa evolución nos obliga a ser cada vez más claros y detallados al comunicar algo, especialmente si después ese conocimiento se traduce en código.</p>

      <p>Nos mostraron conceptos clave como los falsos amigos (palabras que creemos entender pero significan otra cosa), el uso de la voz pasiva y activa, la importancia de los conectores y sinónimos dentro del contexto, y cómo una misma oración puede ser reescrita de forma más clara para evitar errores de interpretación. Todo esto nos sirve para poder escribir buenas especificaciones técnicas y evitar confusiones o pérdidas de información al momento de construir software.</p>
      <hr></hr>
      <h3>
      <FontAwesomeIcon icon="tasks" style={{ marginRight: '8px', color: '#388e3c' }} />
      Ejercitación obligatoria</h3>
      <h4><FontAwesomeIcon icon="file-lines" className="text-blue-600" /> 1er Ensayo </h4>
      <p>Indentifique algún término o expresión específica de un dominio del cual haya participado en el desarrollo de software, en donde el término o expresión tenía una definición precisa diferente del sentido común. </p>
      <p>Por ejemplo, en derecho <strong>"resolver"</strong> es dejar sin efecto un negocio jurídico válido. Mientras que normalmente “resolver” es encontrar una solución o respuesta para un problema, una dificultad o una duda.</p>
      <h4> <FontAwesomeIcon icon="lightbulb" style={{ marginRight: '6px', color: '#fbc02d' }} />
      Mi Respuesta</h4>
      <p>En el sistema web de congresos medicos en el que estoy trabajando, usamos bastante la palabra <strong>"superposición"</strong>, pero con un sentido muy especifico.</p>
      <p>Normalmente, cuando uno piensa en "superposición", se imagina algo encima de otra cosa, pero en este caso, <strong>una superposición pasa cuando "dos actividades del congreso están cargadas en el mismo horario y en la misma sala, o también cuando un disertante aparece asignado a dos charlas distintas a la misma hora"</strong>, aunque sean en salas diferentes, esto genera un problema con la agenda del evento, por eso, desde el lado del desarrollo tuvimos que definir bien que es una superposición y tenerlo en cuenta en la lógica del sistema, especialmente para validar correctamente el cronograma cuando se cargan nuevas actividades.</p>
      <hr></hr>
      <h4><FontAwesomeIcon icon="file-lines" className="text-blue-600" /> 2do Ensayo </h4>
      <p>Seleccione alguna especificación en lenguaje natural de alrededor de 10 líneas, la cual haya utilizado (ya sea porque la haya escrito o la tuvo que entender) y reescriba la misma a partir de las guias vistas en el video de estilos de redacción. </p>
      <h4> <FontAwesomeIcon icon="lightbulb" style={{ marginRight: '6px', color: '#fbc02d' }} />
      Mi Respuesta</h4>
      <h4>Especificación original (lenguaje natural, sin redacción técnica):</h4>
      <p>Al momento de cargar una nueva actividad en el sistema del congreso, hay que revisar que no haya otra ya cargada en el mismo horario o en la misma sala, tambien se tiene que verificar que el disertante no esté ya asignado en otro evento en ese mismo horario. Si se da alguna de estas situaciones, deberia aparecer un mensaje que avise al usuario que hay una superposición y no dejar que se guarde la actividad hasta que se corrija.
      </p>
      <h4>Reescritura con un estilo más claro y técnico:</h4>
      <p>El sistema debe validar que una nueva actividad no se superponga con actividades ya registradas. Se considera superposición si:</p>
      <ol className="list-disc list-inside pl-2">
        <li>Coincide la fecha, el horario y la sala con otra actividad existente.</li>
        <li>El disertante ya está asignado en una actividad diferente en el mismo horario.</li>
        <li>Si se detecta alguna superposición, el sistema debe:
          <ul>
            <li>Mostrar un mensaje de error al usuario indicando el conflicto.</li>
            <li>Impedir el guardado de la nueva actividad hasta que se resuelva la situación</li>
          </ul>
        </li>
      </ol>
      <hr></hr>
      <h4>Contenido adicional de la entrega</h4>

      <p>Actualmente estoy participando en un proyecto real sobre un sistema web de gestión de congresos medicos, este trabajo me ayudo a darme cuenta de lo importante que es definir bien ciertos términos desde el principio, sobre todo cuando pueden tener distintos significados segun el contexto, tambien me sirvió para prestar mas atención a como estan redactadas las especificaciones, ya que eso influye mucho en como se interpreta y desarrolla cada funcionalidad</p>

      <hr></hr>
    </>
    ),
  },
  {
    titulo: "Clase 11 - Diccionario - Glosario - Ontolgía",
    imagen: imagenes.unidad11,
    contenido: (
    <>
      <h3>
        <FontAwesomeIcon icon="file-lines" style={{ marginRight: '8px', color: '#792aa9ff' }} />
      Que son: Diccionario, Glosario y Ontología</h3>
      
      <p>
       Durante esta clase aprendimos la diferencia entre tres conceptos clave a la hora de entender y modelar un dominio: el diccionario, el glosario y la ontología.
      </p>

      <ul className="list-disc list-inside pl-4 space-y-2">
        <li><strong>Diccionario:</strong> Proporciona definiciones según el uso gramatical (verbo, sustantivo, etc.). Es más general y puede tener múltiples acepciones.</li>
        <li><strong>Glosario:</strong> Aporta una definición específica y detallada dentro de un dominio particular. Ayuda a eliminar ambigüedad en términos técnicos.</li>
        <li><strong>Ontología:</strong> Va más allá de definir términos: permite establecer relaciones entre conceptos usando un lenguaje formal, ideal para describir conocimiento estructurado.</li>
      </ul>

 
      <p>Después de entender estas diferencias, vimos cómo aplicar estos conceptos mediante el <strong>Léxico Extendido del Lenguaje (LEL)</strong>, una herramienta para describir símbolos del dominio con dos atributos principales:</p>
      <ul className="list-disc list-inside pl-4 space-y-2">
        <li><strong>Noción:</strong> Describe internamente al símbolo (¿qué es?, ¿quién es?).</li>
        <li><strong>Impacto:</strong> Describe cómo se relaciona con otros símbolos, qué acciones hace o recibe.</li>
      </ul>

      <p>
        Aprendimos a identificar si un símbolo es un <strong>sujeto</strong> (rol activo), un <strong>objeto</strong> (rol pasivo), una <strong>actividad</strong> (acción concreta), o un <strong>estado</strong> (situación en la que se encuentra algo).
      </p>

      <p>
        También analizamos ejemplos concretos, como el “formulario”, el “depósito” o la “cabina de fotos”, entendiendo que no siempre un objeto es una cosa ni un sujeto es una persona; el rol que cumple depende del <em>impacto</em>.
      </p>
      <hr />

      <h4>
        <FontAwesomeIcon icon="lightbulb" style={{ marginRight: '6px', color: '#facc15' }} />
        Reflexión personal
      </h4>

      <p>
        Me pareció muy interesante cómo el LEL permite eliminar ambigüedades al momento de modelar. Muchas veces se usan términos sin acordar previamente su definición, y eso genera errores en el desarrollo. Tener una estructura como esta ayuda muchísimo a alinear el lenguaje entre usuarios, analistas y desarrolladores.
      </p>

      <p>📄 Además, se complementó la clase con un PDF explicativo y un video que aclara muy bien cada concepto.</p>
      <hr></hr>
      <h3>
      <FontAwesomeIcon icon="tasks" style={{ marginRight: '8px', color: '#388e3c' }} />
      Trabajo Práctico Grupal</h3>
      <h4><FontAwesomeIcon icon="file-lines" className="text-blue-600" /> Contenido de las actividades </h4>
      <p><strong>1) En función del estudio de caso que se encuentra a continuación sobre aplicación de LEL, presentar un informe que conste de</strong>:
      <ul className="list-disc list-inside pl-4 space-y-2">
        <li><strong>Introducción explicando el caso de estudio.</strong>.</li>
        <li><strong>Ejemplos de al menos uno de cada símbolo visto en la clase de hoy y en el material.</strong></li>
        <li><strong>Conclusiones sobre el caso relevado </strong>.</li>
      </ul>
      <p>📄 En el siguiente docuemnto se visualiza el caso de estudio que se abordó</p>
      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/1UQBrncREuoZqqDDUUANTk1lm5BIeQ2fZ/preview"
          width="100%"
          height="500"
          allow="autoplay"
          title="PDF Actividad Unidad 1"
        ></iframe>
      </div>
      </p>
      <p><strong>👥Integrantes del grupo 8:</strong> Lara Belaitx Candia, Micaela Corbellini, Luis Felipe Guillen Marquez, Luciana Belén Impollino, Esteban Regueira.</p>
      <p><FontAwesomeIcon icon="book" style={{ marginRight: '8px', color: '#792aa9ff' }} />Podés ver el PDF completo de la actividad Gupal realizada a continuación:</p>
      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/1Sx2xFJsjdaCJqmIA3-V7aGtPdH2_B_h8/preview"
          width="100%"
          height="500"
          allow="autoplay"
          title="PDF Actividad Unidad 1"
        ></iframe>
      </div>
      <hr></hr>
      <p><strong>2) Buscar en sitios pertinentes como Google Académico, Dialnet, Redalic, Latindex, un caso de aplicación de utilización de LEL. Agregar la denominación del trabajo, el archivo visible y el link.Presentar una breve descripción del trabajo seleccionado.</strong></p>

      <p>
      En esta investigación que realizamos en grupo, trabajamos sobre la construcción colaborativa de un Léxico Extendido del Lenguaje (LEL), una herramienta clave dentro de la ingeniería de software, ya que permite identificar y organizar el vocabulario específico de un determinado dominio. A partir de esto, analizamos el funcionamiento de LELTool, una aplicación web desarrollada para facilitar esta tarea en equipo. Esta herramienta permite definir símbolos importantes del dominio (como palabras o frases) y relacionarlos mediante nociones e impactos, lo cual mejora la comunicación entre los distintos actores del proyecto. Además, incorpora funciones útiles como comentarios, opiniones de los usuarios y tareas de refactorización para mantener coherencia. Por último, se evaluó su usabilidad y se comprobó que LELTool resulta más eficiente que el uso de editores de texto tradicionales para este tipo de trabajo colaborativo.
      </p>
      <p><FontAwesomeIcon icon="book" style={{ marginRight: '8px', color: '#792aa9ff' }} />A continuación, podrás ver el trabajo de investigación que decidimos abordar.</p>
      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/1aSs9JBAU7iHmn36Lu-8e2xJY8uS3nR0X/preview"
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
  {
    titulo: "Clase 12 - Validación",
    imagen: imagenes.unidad12,
    contenido: (
    <>
      <h3>
        <FontAwesomeIcon icon="file-lines" style={{ marginRight: '8px', color: '#792aa9ff' }} />
       Validación de los Requerimientos</h3>
      
      <p> 🔎 
        En esta clase vimos por qué es tan importante validar los requerimientos antes de avanzar con el desarrollo. No alcanza con que estén bien escritos o parezcan coherentes: <strong>hay que asegurarse de que representen realmente lo que el usuario necesita.</strong>
      </p>

      <p>
        A veces el usuario cree que sabe la solución, pero en realidad <strong>lo que tiene que plantear es el problema</strong>, y nosotros, como analistas o ingenieros, debemos entenderlo y traducirlo correctamente en un modelo.
      </p>

      <p>También vimos que esperar a <strong>validar al final del desarrollo es un error común y costoso</strong>. Cuanto antes detectemos un problema, mejor.</p>

      <p>🧩Se mencionaron errores frecuentes como:</p>
      <ul className="list-disc list-inside pl-2">
        <li><strong>Contradicciones internas</strong></li>
        <li><strong>Ambigüedades por uso del lenguaje natural</strong></li>
        <li><strong>Inconsistencias con el dominio del problema </strong>.</li>
        <li><strong>Información innecesaria (falta de minimalidad)</strong></li>
        <li><strong>Incompletitud</strong></li>
        <li><strong>Redundancias</strong></li>
      </ul>
      <p>Para evitar estos problemas, se pueden usar herramientas como <strong>prototipos, animaciones o paráfrasis</strong>, que ayudan a que el usuario entienda lo que se está construyendo y confirme si vamos por buen camino.</p>
      <p>La validación no es una tarea estructurada ni con una fórmula mágica. <strong>Es un trabajo en equipo entre analistas y usuarios</strong>, y es clave para que el producto final cumpla con su objetivo.</p>
      <p>En la siguiente imagen podemos observar cómo los requerimientos pueden ser entendidos dependiendo del usuario.</p>
      <img   
      src={imagenes.imgValidacion} 
      alt="Validación" 
      className="imagen-validacion"/>
      <hr></hr>
    </>
    ),
  },
  {
    titulo: "Clase 13 - User Stories, Use Cases y Scenarios",
    imagen: imagenes.Unidad13,
    contenido: (
      <>
        <h3>
          <FontAwesomeIcon icon="file-lines" style={{ marginRight: '8px', color: '#792aa9ff' }} />
          Historias de Usuario, Casos de Uso y Escenarios
        </h3>

        <p>
          Durante esta clase aprendimos a trabajar con tres herramientas clave para la especificación de requerimientos: las <strong>Historias de Usuario</strong>, los <strong>Casos de Uso</strong> y los <strong>Escenarios</strong>. 
        </p>

        <p>
          Empezamos viendo cómo tradicionalmente se especificaban los requerimientos desde el sistema, con frases como "El sistema debe...". Pero luego, se pasó a una mirada desde el rol del usuario: "El usuario debe...", lo cual permite entender mejor qué espera lograr el usuario.
        </p>

        <h4><FontAwesomeIcon icon="book" style={{ marginRight: '6px', color: '#4caf50' }} /> Escenarios</h4>
        <p>
          Los escenarios nos permiten representar diferentes variantes de una misma acción. Por ejemplo, el proceso de facturación cambia según el tipo de cliente. Vimos que los escenarios pueden representarse en distintos formatos, como texto o gráficamente.
        </p>

        <p>
          También se planteó que los escenarios tienen una estructura que incluye un <strong>inicio, recorrido (episodio) y objetivo</strong>, y que esta forma narrativa ayuda a reducir malentendidos entre usuarios y desarrolladores.
        </p>

        <h4><FontAwesomeIcon icon="list-ul" style={{ marginRight: '6px', color: '#0277bd' }} /> Historias de Usuario</h4>
        <p>
          Las historias de usuario se usan mucho en metodologías ágiles. Se enfocan en documentar lo justo y necesario, con plantillas simples que permiten entender el objetivo detrás de cada requerimiento.
        </p>

        <p>
          Vimos que las historias pueden complementarse con <strong>criterios de aceptación</strong>, <strong>mockups</strong> y distintos niveles de detalle como <em>epics</em>, <em>themes</em> y <em>tasks</em>.
        </p>

        <h4><FontAwesomeIcon icon="project-diagram" style={{ marginRight: '6px', color: '#f57c00' }} /> Casos de Uso</h4>
        <p>
          Los casos de uso son útiles en proyectos más grandes o con más documentación. Nos ayudan a definir el límite del sistema, las interacciones con los actores y los flujos de información. También pueden ser gráficos o estar acompañados por plantillas más detalladas.
        </p>

        <p>
          La versión detallada de un caso de uso permite documentar mejor las interacciones entre el usuario y el sistema, algo clave en proyectos complejos.
        </p>

        <p>
          A lo largo de la clase analizamos ejemplos visuales y realizamos actividades prácticas con distintos dominios para ejercitar el uso de estos tres tipos de artefactos.
        </p>
        <hr />
        <h3>
          👥 Ejercitación obligatoria Grupal</h3>
        
        <p> En esta actividad grupal trabajamos sobre la especificación de requerimientos mediante la construcción de <strong>escenarios</strong>, una técnica útil para representar distintos caminos posibles que puede recorrer un usuario dentro de un sistema. A partir de un caso general (comprar productos), elaboramos un escenario base, un escenario que detalla un episodio específico del flujo, y dos variantes alternativas del mismo. Esta ejercitación nos permitió aplicar conceptos vistos en clase como: flujo principal, objetivos, actores, recursos, y variantes del comportamiento, consolidando así el uso práctico de esta técnica de especificación. </p>
        <p>🖇️ En el PDF a continuación, se detalla el criterio de evaluación y el desarrollo de la actividad</p>
        <p><strong>👥Integrantes del grupo 8:</strong> Lara Belaitx Candia, Micaela Corbellini, Luis Felipe Guillen Marquez, Luciana Belén Impollino, Esteban Regueira.</p>
        <div className="pdf-container">
          <iframe
            src="https://drive.google.com/file/d/15ghItEKylIzWWY-pF0-nVS6nO_n1m-uk/preview"
            width="100%"
            height="500"
            allow="autoplay"
            title="PDF Actividad Unidad 1"
          ></iframe>
        </div>
        <hr></hr>
        <h3>
          👥 Ejercitación obligatoria Grupal - En función del TP de la cursada</h3>
        
        <p> En esta actividad se abordó la especificación de requerimientos a partir de un caso práctico, aplicando distintas técnicas vistas durante la cursada. A partir del desarrollo de un proyecto propio —un sistema de reservas para espacios de coworking—, se elaboraron distintos casos de uso, historias de usuario y escenarios. Cada uno de estos artefactos permitió representar diferentes formas de entender y documentar las necesidades del sistema, tanto desde el punto de vista funcional como desde la experiencia del usuario. Esta ejercitación sirvió como instancia integradora para consolidar los conocimientos adquiridos sobre modelado de requerimientos y comunicación efectiva con los futuros usuarios o stakeholders del sistema. </p>
        <p>🖇️ En el PDF a continuación, se detalla el desarrollo de la actividad</p>
        <p><strong>👥Integrantes del grupo 8:</strong> Lara Belaitx Candia, Micaela Corbellini, Luis Felipe Guillen Marquez, Luciana Belén Impollino, Esteban Regueira.</p>
        <div className="pdf-container">
          <iframe
            src="https://drive.google.com/file/d/1pFsnX3Oc6uEW6CGEAC0j4BjIzmOQwGa_/preview"
            width="100%"
            height="500"
            allow="autoplay"
            title="PDF Actividad Unidad 1"
          ></iframe>
        </div>
        <hr></hr>
        <h3>
        Foro de debate de la clase 13</h3>
        <h4><FontAwesomeIcon icon="comments" style={{ marginRight: '8px', color: '#0277bd' }} />Tema de debate</h4>
        <p>Busque información sobre alguno de los siguienes elementos y comparta en el foro (no más de 10 líneas): </p>
        <ul className="list-disc list-inside pl-2">
        <li>Themes</li>
        <li>Epicas</li>
        <li>Criterios de aceptación</li>
        <li>Mockups</li>
        </ul>
        <h4> <FontAwesomeIcon icon="lightbulb" style={{ marginRight: '6px', color: '#fbc02d' }} />
        Mi participacion</h4>
        <h4>Mockups</h4>
        <p>Son como una maqueta del sistema, una especie de imagen estatica que muestra como se veria una pantalla antes de desarrollarla, sirven para tener una idea mas clara de lo que quiere el usuario, sin la necesidad de programar nada todavia, se suelen usar junto a las historias de usuario y ayudan mucho a evitar malentendidos, ya que todos ven lo mismo. Sirve para chequear si lo que tenes en mente va en la direccion correcta con lo que el usuario necesita.</p>
        <h4>Atributo de Caso de Uso (Prioridad)</h4>
        <p>La prioridad nos indica que tan importante o urgente es un caso de uso en relacion con otros, permite organizar el trabajo del equipo y saber que desarrollar primero, por ejemplo, si un caso de uso es esencial para que el sistema funcione, tendra prioridad alta, tambien es útil cuando hay pocos recursos o tiempo y hay que decidir por donde arrancar.</p>
        <hr></hr>
      </>
    ),
  },

  {
    titulo: "Clase 14 - Gestión de Requerimientos",
    imagen: imagenes.Unidad14,
    contenido: (
    <>
      <h3>
        <FontAwesomeIcon icon="file-lines" style={{ marginRight: '8px', color: '#792aa9ff' }} />
        Importancia y fundamentos de la gestión de requerimientos
      </h3>
      
      <p> 🔎 
        En esta clase vimos que gestionar los requerimientos no es solo levantarlos y especificarlos, sino que es un proceso que dura todo el proyecto. La gestión implica planear, organizar, controlar y administrar los requerimientos para asegurarnos que todos estén claros, actualizados y alineados con el desarrollo.
      </p>

      <p>
       Nos preguntamos cosas clave como: ¿quién es responsable de cada requerimiento? ¿quién puede modificarlo? ¿qué pasa si cambio uno, qué otros se afectan? o ¿cómo verifico que un requerimiento se implementó bien?
      </p>

      <p>Aprendimos que en proyectos chicos con pocos requerimientos quizás no sea tan complejo, pero en proyectos grandes o críticos (como sistemas de aviación o trenes) la gestión es vital para evitar errores costosos o peligrosos.</p>
      <p>También conocimos el proyecto REAIMS, que se enfoca en mejorar la ingeniería de requerimientos para sistemas críticos donde los fallos pueden ser catastróficos. Ahí se destaca la importancia de integrar la seguridad y confiabilidad desde el inicio.</p>
      <p>Finalmente, repasamos un conjunto de guías para manejar bien los requerimientos, desde lo básico hasta temas avanzados, y la importancia de priorizar qué requerimientos se van a incluir primero, porque no siempre se pueden hacer todos juntos por limitaciones de tiempo y recursos.</p>

      <hr></hr>
       <h3>
        Debate de cierre</h3>
        <h4><FontAwesomeIcon icon="comments" style={{ marginRight: '8px', color: '#0277bd' }} />Tema de debate</h4>
        <p>Lo invitamos a participar en el foro de cierre de la clase 14, a partir de la siguiente pregunta disparadora: ¿Cree usted que el proceso de gestión de requerimientos debe hacerse siempre que se aborde el desarrollo de un sistema informático? ¿cuál es su relación con la calidad del producto? </p>
        <h4> <FontAwesomeIcon icon="lightbulb" style={{ marginRight: '6px', color: '#fbc02d' }} />
        Respuesta al debate:</h4>
        
        <p>Yo creo que la gestión de requerimientos debería hacerse siempre que se empieza a desarrollar un sistema, sin importar si es un proyecto grande o chico. A veces parece que es mucho lío para proyectos simples, pero tener claro desde el principio qué hay que hacer, quién lo hace y cómo se manejan los cambios evita muchos dolores de cabeza después.</p>

        <p>Esta gestión está súper relacionada con la calidad del producto, porque si no definís bien lo que se necesita y no controlás bien los cambios, al final terminás con un sistema que no funciona como el usuario espera, o con errores que cuestan un montón arreglar.</p>
        <p>Además, cuando se gestiona bien, se evitan malentendidos, contradicciones y confusiones que son comunes cuando no hay orden con los requerimientos. Así que para mí, es clave para que el producto final sea bueno, útil y que la gente quede conforme.</p>
        <hr></hr>
    </>
    ),
  },
  {
    titulo: "Clase 15 - Actividad Conversación con la IA",
    imagen: imagenes.Unidad15,
    contenido: (
    <>
      <h3>
        🤖 Conversación con IA
      </h3>
      
      <p> En esta actividad me puse en el rol de analista funcional para una empresa que está desarrollando una aplicación móvil para mejorar la gestión de pedidos y el seguimiento en tiempo real. A través de una entrevista con un miembro importante del equipo, fui recabando los requerimientos que necesita el sistema para funcionar bien.
      </p>

      <p>
      La idea fue entender qué necesita cada usuario, identificar qué funciones son clave y cuáles restricciones o expectativas hay. También me enfoqué en hacer preguntas claras y adaptarme a la forma de hablar de la persona para poder obtener toda la información necesaria.
      </p>

      <p>Después, ordené y clasifiqué esos requerimientos para tener un panorama claro de qué debe incluir el sistema y así facilitar su desarrollo.</p>

      <p>Si querés ver en detalle todos los tipos de requerimientos que identifiqué durante la entrevista, podés consultar el documento que adjunto en formato PDF.</p>
    
      <div className="pdf-container">
          <iframe
            src="https://drive.google.com/file/d/1b9TOPTpBFiwRKtWSxOFzI-4Eq8DQJgBV/preview"
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
  {
    titulo: "Entrega Final - Podcast",
    imagen: imagenes.Unidad16,
    contenido: (
    <>
      <h3>
        <FontAwesomeIcon icon="file-lines" style={{ marginRight: '8px', color: '#792aa9ff' }} />
         Cierre de la cursada y entrega final
      </h3>

      <p>
      ¡Lo logramos! En esta última entrega resumimos todo lo aprendido en la materia Ingeniería de Requerimientos: desde la elicitación y el análisis, pasando por la especificación y validación, hasta la gestión y priorización de requisitos. Fue un proceso en el que no solo aplicamos los conceptos teóricos, sino que también aprendimos a trabajar de forma colaborativa, organizarnos y apoyarnos como equipo.
      </p>
      <p>
        Queremos agradecer especialmente a la profesora <strong>Samela Marcela Rosalba</strong> por su dedicación, paciencia y acompañamiento durante toda la cursada. Sus devoluciones y observaciones nos ayudaron a mejorar en cada entrega, y a entender la importancia de cada etapa del proceso.
      </p>
      <p>
        También quiero aprovechar este cierre para agradecer a mis compañeros y compañeras del grupo, con quienes compartimos ideas, resolvimos desafíos y nos apoyamos mutuamente durante todo el trabajo. Sin ese compromiso colectivo, este proyecto no hubiera sido posible.
      </p>
      <p>
        <strong>👥 Integrantes del grupo 8:</strong> Lara Belaitx Candia, Micaela Corbellini, Luis Felipe Guillén Márquez, Luciana Belén Impollino, Esteban Regueira.
      </p>
      <p>
        Si querés ver el trabajo completo con todos los tipos de requerimientos, podés consultar el documento adjunto en formato PDF.
      </p>

      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/18T-tisCIbKMw-hCqccHYW7X-MpuIwn9y/preview"
          width="100%"
          height="600"
          allow="autoplay"
          title="PDF Actividad Unidad 1"
        ></iframe>
      </div>
      <hr></hr>
      <h3>Podcast - <em>Entre líneas y Requerimientos (Episodio 2)</em></h3>
      <p><img 
      src={imagenes.imgPodcast} 
      alt="Validación" 
      className="imagen-Podcast"/>
      </p>
      <p>La imagen fue seleccionada para representar una escena típica de una reunión de trabajo, correspondiente a la etapa de elicitación dentro de la Ingeniería de Requerimientos. En esta fase se recopila información directamente de los stakeholders a través de una comunicación activa, utilizando técnicas como entrevistas y lluvias de ideas. Lo que queríamos transmitir con esta imagen es el clima de colaboración y discusión, algo clave en este proceso iterativo que busca comprender, documentar y validar las necesidades reales de quienes participan en el proyecto.</p>
      <hr></hr>
      <p>
        <strong>🎧 Escuchá el episodio aquí:</strong>
      </p>
      <div className="pdf-container">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/episode/2iEY1B0yCQ3yyBI7XKfhKV?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Podcast El Ingeniero – Entre líneas y Requerimientos"
        ></iframe>
      </div>
      <hr></hr>
      <h4>Guion del Podcast</h4>

      <p>🖇️ En el siguiente PDF puedes visualizar el guión que desarrollamos durante el podcast</p>
        
      <p><strong>👥Integrantes del grupo 8:</strong> Lara Belaitx Candia, Micaela Corbellini, Luis Felipe Guillen Marquez, Luciana Belén Impollino, Esteban Regueira.</p>
      <div className="pdf-container">
        <iframe
          src="https://drive.google.com/file/d/17Jfvew8tmToB9Yd_UekMX6Pj12by7A-h/preview"
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
          <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          Ingeniería de Requerimientos
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Bienvenido a la sección dedicada a los trabajos prácticos, investigaciones y actividades de la materia.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Dentro de cada tarjeta vas a encontrar el contenido trabajado en clase: actividades, investigaciones, debates y otros aportes. 
          Para ver el detalle de cada uno, hacé clic sobre la tarjeta correspondiente y se mostrará las actividades realizada de esa unidad.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Materia dictada por la profesora <strong>Samela Marcela Rosalba</strong> en la <strong>Universidad Abierta Interamericana (UAI)</strong>.
          </motion.p>
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Este trabajo forma parte del portafolio académico correspondiente al 4 año de la carrera <strong>Ingeniería de Sistemas Informáticos</strong>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Cada unidad refleja competencias adquiridas en temas como especificación de requerimientos, metodologías ágiles, casos de uso, documentación técnica, entre otros.
        </motion.p>
        <hr className="linea-separadora" />
        

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Unidades del Curso
        </motion.h2>
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
