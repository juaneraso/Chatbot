// import React, { useState } from 'react';
// import styles from './Chatbot.module.css'; // Importar el módulo CSS

// const Chatbot = () => {
//   const [messages, setMessages] = useState([{ text: "Hola, ¿cómo te puedo ayudar?", sender: "bot" }]);
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (input.trim() === "") return;

//     // Agregar el mensaje del usuario
//     setMessages([...messages, { text: input, sender: "user" }]);
    
//     // Respuesta automática del bot
//     setTimeout(() => {
//       setMessages(prevMessages => [
//         ...prevMessages, 
//         { text: "Lo siento, soy un bot simple. Aún no puedo responder preguntas complejas.", sender: "bot" }
//       ]);
//     }, 1000);
    
//     setInput("");
//   };

//   return (
//     <div className={styles.chatbot}> {/* Usar el objeto styles para aplicar estilos */}
//       <div className={styles['chat-window']}> {/* Usar estilos con guiones */}
//         {messages.map((msg, index) => (
//           <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>

//       <div className={styles['input-section']}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//           placeholder="Escribe tu mensaje..."
//           className={styles.input} 
//         />
//         <button onClick={handleSend} className={styles.button}>Enviar</button> {/* Aplicar estilos a los botones */}
//       </div>
//     </div>
//   );
// };

// export default Chatbot;


// import React, { useState } from 'react';
// import styles from './Chatbot.module.css'; // Importar el módulo CSS

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hola, soy tu tutor virtual de la Fundacion de Educacion Superior San Jose. Puedo ayudarte con las siguientes opciones:", sender: "bot" },
//     { text: "1) Horarios", sender: "bot" },
//     { text: "2) Profesores", sender: "bot" }
//   ]);
//   const [input, setInput] = useState("");

//   const getBotResponse = (userInput) => {
//     const lowerCaseInput = userInput.toLowerCase();

//     if (lowerCaseInput.includes("horarios")) {
//       return "Aquí están los horarios de las clases. ¿Para qué materia necesitas el horario?";
//     } else if (lowerCaseInput.includes("profesores")) {
//       return "Aquí tienes la información sobre los profesores. ¿Sobre qué profesor necesitas información?";
//     } else if (lowerCaseInput.includes("hola")) {
//       return "¡Hola! ¿Cómo puedo ayudarte hoy?";
//     } else {
//       return "Lo siento, no entiendo tu pregunta. ¿Puedes elegir una opción de la lista?";
//     }
//   };

//   const handleSend = () => {
//     if (input.trim() === "") return;

//     // Agregar el mensaje del usuario
//     setMessages([...messages, { text: input, sender: "user" }]);

//     // Generar respuesta del bot después de un pequeño retraso
//     setTimeout(() => {
//       const botResponse = getBotResponse(input);
//       setMessages(prevMessages => [
//         ...prevMessages,
//         { text: botResponse, sender: "bot" }
//       ]);
//     }, 1000);

//     setInput("");
//   };

//   const handleOptionClick = (option) => {
//     // Agregar el mensaje de la opción seleccionada por el usuario
//     setMessages([...messages, { text: option, sender: "user" }]);

//     // Generar respuesta del bot basada en la opción seleccionada
//     setTimeout(() => {
//       const botResponse = getBotResponse(option);
//       setMessages(prevMessages => [
//         ...prevMessages,
//         { text: botResponse, sender: "bot" }
//       ]);
//     }, 1000);
//   };

//   return (
//     <div className={styles.chatbot}>
//       <div className={styles['chat-window']}>
//         {messages.map((msg, index) => (
//           <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>

//       <div className={styles['input-section']}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//           placeholder="Escribe tu mensaje..."
//           className={styles.input}
//         />
//         <button onClick={handleSend} className={styles.button}>Enviar</button>
//       </div>


//     </div>
//   );
// };

// export default Chatbot;

import React, { useState } from 'react';
import styles from './Chatbot.module.css';
import logo from '../../assets/sanjose2.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hola, soy tu tutor virtual de la Fundación de Educación Superior San José. Te doy la bienvenida a este espacio creado para apoyar y mejorar tu proceso pedagógico. No dudes en preguntarme cualquier cosa que necesites.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

//   const getBotResponse = (userInput) => {
//     const lowerCaseInput = userInput.toLowerCase();

//     if (lowerCaseInput.includes("inscribirme")) {
//       return "Puedes inscribirte a través de la plataforma de la universidad. ¿Te gustaría saber más sobre el proceso?";
//     } else if (lowerCaseInput.includes("hola")) {
//       return "¡Hola! ¿Cómo puedo ayudarte?";
//     } else {
//       return "Lo siento, no entiendo tu pregunta. Intenta elegir una opción de las sugerencias.";
//     }
//   };

const getBotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();
  
    if (lowerCaseInput.includes("normas apa")) {
      return "Puedes seguir la estructura estándar: portada, resumen, introducción, desarrollo, conclusiones, y referencias. En las referencias, usa el formato: Apellido, Iniciales. (Año). Título en cursiva. Editorial. También puedes consultar el manual oficial de la APA 7 o buscar plantillas que sigan este formato.";
    } else if (lowerCaseInput.includes("mental")) {
      return "Un mapa mental se organiza en torno a una idea central. A partir de ella, crea ramas principales con ideas secundarias y conecta conceptos relacionados. Puedes usar herramientas como MindMeister, XMind o simplemente dibujarlo en papel.";
    } else if (lowerCaseInput.includes("infografia")) {
      return "Para una infografía efectiva, primero estructura la información en secciones como definición, objetivos y ejemplos. Usa íconos y gráficos para representar visualmente los datos. Puedes utilizar herramientas como Canva o Piktochart.";
    } else if (lowerCaseInput.includes("seguridad")) {
      return "Los temas clave en SST (seguridad y salud en el trabajo) incluyen la identificación de riesgos laborales, la evaluación y prevención de accidentes, la formación en seguridad, y el cumplimiento de la normativa vigente para proteger la salud de los trabajadores.";
    } else if (lowerCaseInput.includes("bibliografía")) {
      return "Algunos libros recomendados son 'Seguridad y Salud en el Trabajo' de Alfonso Torres y 'Manual de Salud Ocupacional' de José M. Arboleda. También puedes consultar la normativa del Ministerio de Trabajo de Colombia.";
    } else if (lowerCaseInput.includes("legislación")) {
      return "La Ley 1562 de 2012 es una de las principales normativas que regula la Seguridad y Salud en el Trabajo en Colombia, actualizando la legislación para adaptarse a estándares internacionales.";
    } else if (lowerCaseInput.includes("plan de estudios")) {
      return "El plan de estudios incluye materias como programación, bases de datos, redes, seguridad informática, desarrollo de software, y gestión de proyectos, entre otras. Puedes consultar el sitio web de la universidad para el detalle completo.";
    } else if (lowerCaseInput.includes("primeros semestres")) {
      return "Los primeros semestres incluyen materias básicas como matemáticas, física, introducción a la ingeniería industrial, y economía. El enfoque se va especializando en áreas como gestión de procesos y logística.";
    } else if (lowerCaseInput.includes("inscribirme")) {
      return "Puedes inscribirte a través del portal web de la universidad, donde encontrarás los requisitos de admisión y la opción para llenar un formulario. También puedes acercarte a la oficina de admisiones para obtener asistencia presencial.";
    } else if (lowerCaseInput.includes("perfil del egresado")) {
      return "Un egresado en Contaduría Pública estará capacitado para llevar la contabilidad de empresas, auditar estados financieros y asesorar en temas tributarios y fiscales, con un enfoque ético y normativo.";
    } else if (lowerCaseInput.includes("software")) {
      return "Los estudiantes suelen trabajar con software como AutoCAD, SketchUp y Revit, utilizados para la creación de planos y modelos tridimensionales en el diseño de interiores y espacios arquitectónicos.";
    } else if (lowerCaseInput.includes("competencias")) {
      return "Las competencias incluyen el desarrollo de productos innovadores, conocimientos en materiales, ergonomía, manejo de software de diseño (como Rhino o SolidWorks), y capacidad para gestionar proyectos desde la concepción hasta la producción.";
    } else if (lowerCaseInput.includes("proyectos destacados")) {
      return "Los proyectos destacados se presentan en las exposiciones de fin de semestre y eventos de moda organizados por la universidad. También puedes visitar el sitio web de la facultad o sus redes sociales para ver galerías y videos.";
    } else if (lowerCaseInput.includes("prácticas profesionales")) {
      return "Puedes acceder a las prácticas profesionales inscribiéndote en el programa de pasantías de la universidad. Consulta con la coordinación de la carrera para ver las vacantes disponibles y los requisitos.";
    } else if (lowerCaseInput.includes("recursos bibliográficos")) {
      return "Algunos libros recomendados incluyen 'Design Thinking' de Tim Brown, 'El arte de proyectar en arquitectura' de Neufert, y 'Diseño de producto' de Karl T. Ulrich y Steven Eppinger. La biblioteca de la universidad tiene una amplia colección de estos y otros títulos.";
    } else if (lowerCaseInput.includes("homologación")) {
      return "El proceso de homologación implica presentar tu historial académico en la oficina de registros, junto con los contenidos de las materias que cursaste en otra institución. Luego, un comité académico evaluará si se cumplen los requisitos para la homologación.";
    } else if (lowerCaseInput.includes("hola")) {
      return "¡Hola! ¿Cómo puedo ayudarte hoy?";
    } else {
      return "Lo siento, no entiendo tu pregunta. Intenta elegir una opción de las sugerencias.";
    }
  };

  
  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "user" }]);

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prevMessages => [
        ...prevMessages,
        { text: botResponse, sender: "bot" }
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className={styles.chatbotContainer}>
      {/* Encabezado del chatbot */}
      <div className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <span className={styles.headerText}>ESTOY AQUÍ PARA AYUDARTE</span>
      </div>

      {/* Ventana de chat */}
      <div className={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input de mensajes */}
      <div className={styles.inputSection}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="En qué te podemos ayudar?"
          className={styles.input}
        />
        {/* <button onClick={handleSend} className={styles.sendButton}>
          <img src="send_icon.png" alt="Enviar" className={styles.sendIcon} />
        </button> */}
         <button onClick={handleSend} className={styles.sendButton}>
          {/* <FontAwesomeIcon icon={faPaperPlane} className={styles.sendIcon} />  */}
          <FontAwesomeIcon icon={faArrowRight} className={styles.sendIcon} />
          {/* <FontAwesomeIcon icon={faEnvelope} className={styles.sendIcon} /> */}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;


