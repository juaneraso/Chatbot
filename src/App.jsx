import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chatbot from './components/Chatbot/Chatbot'
import Gpt from './components/Gpt/Gpt'
import Speech from './components/Speech/Speech'
import Avatar3D from './components/Three/GLTFViewer'
import GLTFViewer from './components/Three/GLTFViewer'

// import image from "./assets/wraith.glb"

function App() {
  

  return (
    <>     
    <Chatbot/>
    <Gpt/>
    <GLTFViewer/>
    {/* <Speech/> */}
    {/* <GLTFViewer url="../src/assets/wraith.glb" /> */}
      
    </>
  )
}

export default App
