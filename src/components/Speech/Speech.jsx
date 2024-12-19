// import React, { useState } from 'react';

// const Speech = () => {
//   const [textoReconocido, setTextoReconocido] = useState('');
//   const [escuchando, setEscuchando] = useState(false);

//   // Verifica si SpeechRecognition está disponible
//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   const recognition = new SpeechRecognition();

//   // Configuración básica
//   recognition.lang = 'es-ES'; // Idioma en español
//   recognition.interimResults = false; // Solo mostrar resultados finales

//   const iniciarEscucha = () => {
//     recognition.start();
//     setEscuchando(true);
//   };

//   const detenerEscucha = () => {
//     recognition.stop();
//     setEscuchando(false);
//   };

//   // Manejar resultados del reconocimiento
//   recognition.onresult = (event) => {
//     const transcript = event.results[0][0].transcript;
//     setTextoReconocido(transcript);
//   };

//   // Manejar errores
//   recognition.onerror = (event) => {
//     console.log('Error en el reconocimiento de voz:', event.error);
//   };

//   return (
//     <div>
//       <h2>Reconocimiento de Voz</h2>
//       <button onClick={iniciarEscucha} disabled={escuchando}>
//         Iniciar reconocimiento de voz
//       </button>
//       <button onClick={detenerEscucha} disabled={!escuchando}>
//         Detener reconocimiento de voz
//       </button>
//       <p>Texto reconocido: {textoReconocido}</p>
//     </div>
//   );
// };

// export default Speech;


import React, { useState } from 'react';

const Speech = () => {
  const [textoReconocido, setTextoReconocido] = useState('');
  const [escuchando, setEscuchando] = useState(false);

  // Verifica si SpeechRecognition está disponible
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  // Configuración básica
  recognition.lang = 'es-ES'; // Idioma en español
  recognition.interimResults = false; // Solo mostrar resultados finales

  const iniciarEscucha = () => {
    recognition.start();
    setEscuchando(true);
  };

  const detenerEscucha = () => {
    recognition.stop();
    setEscuchando(false);
  };

  // Manejar resultados del reconocimiento
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setTextoReconocido(transcript);
  };

  // Manejar errores
  recognition.onerror = (event) => {
    console.log('Error en el reconocimiento de voz:', event.error);
  };

  // Función para leer el texto reconocido
  const leerTexto = () => {
    if (textoReconocido !== '') {
      const speech = new SpeechSynthesisUtterance(textoReconocido);
      speech.lang = 'es-ES'; // Idioma en español
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div>
      <h2>Reconocimiento de Voz</h2>
      <button onClick={iniciarEscucha} disabled={escuchando}>
        Iniciar reconocimiento de voz
      </button>
      <button onClick={detenerEscucha} disabled={!escuchando}>
        Detener reconocimiento de voz
      </button>
      <button onClick={leerTexto} disabled={!textoReconocido}>
        Leer texto reconocido
      </button>
      <p>Texto reconocido: {textoReconocido}</p>
    </div>
  );
};

export default Speech;
