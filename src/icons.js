// src/icons.js
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHouse,
  faUser,
  faLaptopCode,
  faCode,
  faEnvelope,
  faXmark,
  faFileLines,   // Para contenido teórico
  faTasks,       // Para actividad
  faComments,    // Para debate
  faLightbulb,    // Para opinión o participación
  faBook,
  faListUl, 
  faCheckCircle, 
  faClock, 
  faSyncAlt, 
  faProjectDiagram
} from '@fortawesome/free-solid-svg-icons';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faHouse, faUser, faLaptopCode, faCode, faEnvelope, faGithub, faLinkedin,faXmark,faFileLines,faTasks,faComments,faLightbulb,faBook,faListUl, faCheckCircle, faClock, faSyncAlt, faProjectDiagram);
