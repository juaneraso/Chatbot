
    

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


import React, { useState } from 'react';
import { OpenAI } from 'openai';

// Configuración de OpenAI

const test = import.meta.env.VITE_APP_API;
const openai = new OpenAI({
apiKey: test,
dangerouslyAllowBrowser: true 
});

// Función para obtener respuesta del chatbot
const getResponseFromChatbot = async (userMessage) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Puedes usar "gpt-3.5-turbo" o versiones superiores
      messages: [{ role: 'user', content: userMessage }],
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error al obtener respuesta del chatbot:', error);
    throw error;
  }
};

const Gpt = () => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const chatbotResponse = await getResponseFromChatbot("¿que hora es?");
      setResponse(chatbotResponse);
    } catch (error) {
      setResponse('Hubo un error al obtener la respuesta.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>PRUEBA GPT</h1>
      <button onClick={handleClick}>Obtener Respuesta</button>
      {loading && <p>Cargando...</p>}
      {response && <p>Respuesta: {response}</p>}
    </>
  );
};

export default Gpt;
