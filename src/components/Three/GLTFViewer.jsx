// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// // import styles from './Gpt.module.css';

// import avatar from '../../assets/scene.gltf' ;

// function Avatar3D({ hablando }) {
//   const mountRef = useRef(null);
//   const imagen = avatar;

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);
 


//     const loader = new GLTFLoader();
//     let avatar;

//     // Cargar el modelo 3D del rostro humano
//     loader.load('../../assets/scene.gltf', (gltf) => {
//       avatar = gltf.scene;
//       avatar.position.set(0, -1, 0);
//       scene.add(avatar);
//     });

//     // Añadir luz
//     const light = new THREE.DirectionalLight(0xffffff, 1);
//     light.position.set(0, 1, 2);
//     scene.add(light);

//     const controls = new OrbitControls(camera, renderer.domElement);
//     camera.position.set(0, 1, 3);

//     const animate = () => {
//       requestAnimationFrame(animate);
//       if (avatar && hablando) {
//         avatar.rotation.y += 0.01; // Hace que la cabeza se mueva ligeramente cuando habla
//       }
//       renderer.render(scene, camera);
//       controls.update();
//     };

//     animate();

//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//     };
//   }, [hablando]);

//   return <div ref={mountRef} ></div>;
// }

// export default Avatar3D;


import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
//import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// import image from '../../../src/assets/wraith.glb'

function GLTFViewer({ hablando }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    let avatar;

    loader.load( '../../../src/assets/boy.glb', function ( gltf ) {

      scene.add( gltf.scene );
    
    }, undefined, function ( error ) {
    
      console.error( error );
    
    } );


    // Cargar el modelo 3D del rostro humano desde la carpeta 'public/models/'
    // loader.load('../../assets/lemon_4k.gltf', (gltf) => {
    //   avatar = gltf.scene;
    //   avatar.position.set(0, -1, 0);
    //   scene.add(gltf.scene);
    // }, undefined, (error) => {
    //   console.error('Error al cargar el modelo 3D:', error);
    // });

    // Añadir luz
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 2);
    scene.add(light);

    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 1, 3);

    const animate = () => {
      requestAnimationFrame(animate);
      if (avatar && hablando) {
        avatar.rotation.y += 0.01; // Hace que la cabeza se mueva ligeramente cuando habla
      }
      renderer.render(scene, camera);
      controls.update();
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [hablando]);

  return <div ref={mountRef}></div>;
}

export default GLTFViewer;




// GLTFViewer.jsx
// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// // Componente que carga el modelo GLTF
// function Model({ url }) {
//   const { scene } = useGLTF(url);  // Carga el modelo usando useGLTF
//   return <primitive object={scene} />;  // Renderiza el objeto 3D
// }

// // Componente principal que usa Canvas de react-three-fiber
// export default function GLTFViewer({ url }) {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <Suspense fallback={null}>
//         <Model url={url} />  {/* Pasa la URL del modelo como prop */}
//       </Suspense>
//       <OrbitControls />  {/* Controles de cámara */}
//     </Canvas>
//   );
// }
