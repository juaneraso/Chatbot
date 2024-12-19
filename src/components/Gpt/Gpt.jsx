
    

// const Gpt = () => {


//     const { Configuration, OpenAIApi } = require("openai");

//     const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,  // Incluir la clave API aquí o en variables de entorno

//     });
    
//     const openai = new OpenAIApi(configuration);
    
//     async function getResponseFromChatbot(userMessage) {
//       const response = await openai.createChatCompletion({
//         model: "gpt-4", // Puedes usar "gpt-3.5-turbo" o versiones superiores
//         messages: [{ role: "user", content: userMessage }],
//       });
//       return response.data.choices[0].message.content;
//     }
    
//     // Llamada de ejemplo
//     getResponseFromChatbot("¿Cuál es el horario de clases de la facultad de ingeniería?")
//       .then(response => console.log(response))
//       .catch(err => console.error(err));
    

//  return (
//     <>
//      <h1>PRUEBA GPT</h1>
    
    
//     </>



//  )



// }

// export default Gpt ;


// import React, { useState } from 'react';
// import { OpenAI } from 'openai';

// // Configuración de OpenAI

// const test = import.meta.env.VITE_APP_API;
// const openai = new OpenAI({
// apiKey: test,
// dangerouslyAllowBrowser: true 
// });

// // Función para obtener respuesta del chatbot
// const getResponseFromChatbot = async (userMessage) => {
//   try {
//     const response = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo', // Puedes usar "gpt-3.5-turbo" o versiones superiores
//       messages: [{ role: 'user', content: userMessage }],
//     });
//     return response.choices[0].message.content;
//   } catch (error) {
//     console.error('Error al obtener respuesta del chatbot:', error);
//     throw error;
//   }
// };

// const Gpt = () => {
//   const [response, setResponse] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleClick = async () => {
//     setLoading(true);
//     try {
//       const chatbotResponse = await getResponseFromChatbot("¿que hora es?");
//       setResponse(chatbotResponse);
//     } catch (error) {
//       setResponse('Hubo un error al obtener la respuesta.');
//     } finally {
//       setLoading(false);
//     }
//   };


// };

// export default Gpt;

// import React, { useState } from 'react';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// function Gpt() {
//   const [userInput, setUserInput] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   // Usa tu API Key desde las variables de entorno
//   const apiKey = import.meta.env.VITE_APP_API;
//   const genAI = new GoogleGenerativeAI(apiKey);
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!userInput) return;

//     try {
//       // Genera contenido usando el prompt del usuario
//       const result = await model.generateContent(userInput);
//       const botResponse = await result.response.text();

//       // Actualiza el historial del chat con la respuesta del bot
//       setChatHistory([...chatHistory, { user: userInput, bot: botResponse }]);
//       setUserInput(''); // Limpia el campo de entrada
//     } catch (error) {
//       console.error("Error al generar contenido:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Chatbot</h2>
//       <div>
//         {chatHistory.map((message, index) => (
//           <div key={index}>
//             <strong>{message.user}:</strong> {message.bot}
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={userInput}
//           onChange={(event) => setUserInput(event.target.value)}
//           placeholder="Escribe tu mensaje aquí"
//         />
//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//   );
// }

// export default Gpt;

// import React, { useState } from 'react';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import styles from './Gpt.module.css'; // Importa los estilos del módulo

// function Gpt() {
//   const [userInput, setUserInput] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   const apiKey = import.meta.env.VITE_APP_API;
//   const genAI = new GoogleGenerativeAI(apiKey);
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!userInput) return;

//     try {
//       const result = await model.generateContent(userInput);
//       const botResponse = await result.response.text();

//       setChatHistory([...chatHistory, { user: userInput, bot: botResponse }]);
//       setUserInput('');
//     } catch (error) {
//       console.error("Error al generar contenido:", error);
//     }
//   };

//   return (
//     <div className={styles.chatContainer}>
//       <h2 className={styles.heading}>Chatbot</h2>
//       <div className={styles.chatBox}>
//         {chatHistory.map((message, index) => (
//           <div key={index} className={styles.message}>
//             <strong className={styles.user}>{message.user}:</strong> 
//             <span className={styles.bot}>{message.bot}</span>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="text"
//           value={userInput}
//           onChange={(event) => setUserInput(event.target.value)}
//           placeholder="Escribe tu mensaje aquí"
//           className={styles.input}
//         />
//         <button type="submit" className={styles.button}>Enviar</button>
//       </form>
//     </div>
//   );
// }

// export default Gpt;


// import React, { useState } from 'react';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import styles from './Gpt.module.css'; // Importa los estilos del módulo

// function Gpt() {
//   const [userInput, setUserInput] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   const apiKey = import.meta.env.VITE_APP_API;
//   const genAI = new GoogleGenerativeAI(apiKey);
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!userInput) return;

//     try {
//       const result = await model.generateContent(userInput);
//       const botResponse = await result.response.text();

//       setChatHistory([...chatHistory, { user: userInput, bot: botResponse }]);
//       setUserInput('');
//     } catch (error) {
//       console.error("Error al generar contenido:", error);
//     }
//   };

//   return (
//     <div className={styles.chatContainer}>
//       <h2 className={styles.heading}>Chatbot</h2>
//       <div className={styles.chatBox}>
//         {chatHistory.map((message, index) => (
//           <div key={index} className={styles.message}>
//             <strong className={styles.user}>{message.user}:</strong> 
//             <span className={styles.bot}>{message.bot}</span>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="text"
//           value={userInput}
//           onChange={(event) => setUserInput(event.target.value)}
//           placeholder="Escribe tu mensaje aquí"
//           className={styles.input}
//         />
//         <button type="submit" className={styles.button}>Enviar</button>
//       </form>
//     </div>
//   );
// }

// export default Gpt;



// import React, { useState } from 'react';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import styles from './Gpt.module.css'; // Importa los estilos del módulo

// function Gpt() {
//   const [userInput, setUserInput] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   const apiKey = import.meta.env.VITE_APP_API;
//   const genAI = new GoogleGenerativeAI(apiKey);
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!userInput) return;

//     try {
//       const result = await model.generateContent(userInput);
//       const botResponse = await result.response.text();

//       setChatHistory([...chatHistory, { user: userInput, bot: botResponse }]);
//       setUserInput('');
//     } catch (error) {
//       console.error("Error al generar contenido:", error);
//     }
//   };

//   return (
//     <div className={styles.chatContainer}>
//       <h2 className={styles.heading}>Chatbot</h2>
//       <div className={styles.chatBox}>
//         {chatHistory.map((message, index) => (
//           <div key={index} className={styles.message}>
//             <strong className={styles.user}>{message.user}:</strong> 
//             <span className={styles.bot}>{message.bot}</span>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="text"
//           value={userInput}
//           onChange={(event) => setUserInput(event.target.value)}
//           placeholder="Escribe tu mensaje aquí"
//           className={styles.input}
//         />
//         <button type="submit" className={styles.button}>Enviar</button>
//       </form>
//     </div>
//   );
// }

// export default Gpt;


// import React, { useState } from 'react';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import styles from './Gpt.module.css'; // Importa los estilos del módulo

// function Gpt() {
//   const [userInput, setUserInput] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [escuchando, setEscuchando] = useState(false);

//   // API para el chatbot
//   const apiKey = import.meta.env.VITE_APP_API;
//   const genAI = new GoogleGenerativeAI(apiKey);
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   // Verifica si SpeechRecognition está disponible para voz a texto
//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   const recognition = new SpeechRecognition();
//   recognition.lang = 'es-ES'; // Idioma español
//   recognition.interimResults = false; // Solo mostrar resultados finales

//   // Iniciar la transcripción de voz a texto
//   const iniciarEscucha = () => {
//     recognition.start();
//     setEscuchando(true);
//   };

//   // Detener la transcripción de voz
//   const detenerEscucha = () => {
//     recognition.stop();
//     setEscuchando(false);
//   };

//   // Cuando se obtiene el resultado de voz a texto
//   recognition.onresult = (event) => {
//     const transcript = event.results[0][0].transcript;
//     setUserInput(transcript); // Pasa el texto transcrito al input del chatbot
//     handleSubmit(null, transcript); // Envía automáticamente el texto al chatbot
//   };

//   // Manejar errores de reconocimiento de voz
//   recognition.onerror = (event) => {
//     console.log('Error en el reconocimiento de voz:', event.error);
//   };

//   // Enviar el texto del usuario al chatbot
//   const handleSubmit = async (event, transcript = '') => {
//     if (event) event.preventDefault(); // Si viene del botón de envío
//     const input = transcript || userInput; // Usar el texto transcrito o lo que haya en el input

//     if (!input) return;

//     try {
//       const result = await model.generateContent(input);
//       const botResponse = await result.response.text();

//       setChatHistory([...chatHistory, { user: input, bot: botResponse }]);
//       setUserInput('');

//       // Leer la respuesta del chatbot en voz alta
//       leerTexto(botResponse);
//     } catch (error) {
//       console.error("Error al generar contenido:", error);
//     }
//   };

//   // Función para leer el texto en voz alta (respuesta del bot)
//   const leerTexto = (texto) => {
//     if (texto !== '') {
//       const speech = new SpeechSynthesisUtterance(texto);
//       speech.lang = 'es-ES'; // Idioma en español
//       window.speechSynthesis.speak(speech);
//     }
//   };

//   return (
//     <div className={styles.chatContainer}>
//       <h2 className={styles.heading}>Chatbot con Voz</h2>
//       <div className={styles.chatBox}>
//         {chatHistory.map((message, index) => (
//           <div key={index} className={styles.message}>
//             <strong className={styles.user}>{message.user}:</strong> 
//             <span className={styles.bot}>{message.bot}</span>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="text"
//           value={userInput}
//           onChange={(event) => setUserInput(event.target.value)}
//           placeholder="Escribe o usa tu voz"
//           className={styles.input}
//         />
//         <button type="submit" className={styles.button}>Enviar</button>
//       </form>
//       <button onClick={iniciarEscucha} disabled={escuchando} className={styles.button}>
//         Iniciar reconocimiento de voz
//       </button>
//       <button onClick={detenerEscucha} disabled={!escuchando} className={styles.button}>
//         Detener reconocimiento de voz
//       </button>
//     </div>
//   );
// }

// export default Gpt;


import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import styles from './Gpt.module.css'; // Importa los estilos del módulo

function Gpt() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [escuchando, setEscuchando] = useState(false);
  const [continuarCharlando, setContinuarCharlando] = useState(false);

  // API para el chatbot
  const apiKey = import.meta.env.VITE_APP_API;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Verifica si SpeechRecognition está disponible para voz a texto
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'es-ES'; // Idioma español
  recognition.interimResults = false; // Solo mostrar resultados finales

  // Iniciar la transcripción de voz a texto
  const iniciarEscucha = () => {
    recognition.start();
    setEscuchando(true);
    setContinuarCharlando(true); // Habilita el ciclo de charla continua
  };

  // Detener la transcripción de voz
  const detenerEscucha = () => {
    recognition.stop();
    setEscuchando(false);
    setContinuarCharlando(false); // Detiene la charla continua
  };

  // Cuando se obtiene el resultado de voz a texto
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setUserInput(transcript); // Pasa el texto transcrito al input del chatbot
    handleSubmit(null, transcript); // Envía automáticamente el texto al chatbot
  };

  // Manejar errores de reconocimiento de voz
  recognition.onerror = (event) => {
    console.log('Error en el reconocimiento de voz:', event.error);
  };

  // Enviar el texto del usuario al chatbot
  const handleSubmit = async (event, transcript = '') => {
    if (event) event.preventDefault(); // Si viene del botón de envío
    const input = transcript || userInput; // Usar el texto transcrito o lo que haya en el input

    if (!input) return;

    try {
      const result = await model.generateContent(input);
      const botResponse = await result.response.text();

      setChatHistory([...chatHistory, { user: input, bot: botResponse }]);
      setUserInput('');

      // Leer la respuesta del chatbot en voz alta
      leerTexto(botResponse);
    } catch (error) {
      console.error("Error al generar contenido:", error);
    }
  };

  // Función para leer el texto en voz alta (respuesta del bot)
  const leerTexto = (texto) => {
    if (texto !== '') {
      const speech = new SpeechSynthesisUtterance(texto);
      speech.lang = 'es-ES'; // Idioma en español

     
      speech.onend = () => {
        // Cuando el bot termine de hablar, reiniciar la escucha si está en modo de charla continua
       
          console.log("continua charla")
          iniciarEscucha();
        
      };

      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <h2 className={styles.heading}>Chatbot con Voz</h2>
      <div className={styles.chatBox}>
        {chatHistory.map((message, index) => (
          <div key={index} className={styles.message}>
            <strong className={styles.user}>{message.user}:</strong> 
            <span className={styles.bot}>{message.bot}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          placeholder="Escribe o usa tu voz"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
      <button onClick={iniciarEscucha} disabled={escuchando} className={styles.button}>
        Iniciar charla por voz
      </button>
      <button onClick={detenerEscucha} disabled={!escuchando} className={styles.button}>
        Detener charla por voz
      </button>
    </div>
  );
}

export default Gpt;

