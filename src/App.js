import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
// import { EffectComposer, DepthOfField, Bloom } from '@react-three/postprocessing'
// import { BlendFunction } from '@react-three/postprocessing/node_modules/postprocessing';
import { Ground } from './Ground';
import { Car } from './Car';
import './App.css';
import MenuLayout from './MenuLayout';
import Header from './Header';

function CarShow() {
   return(
      <>
         <OrbitControls target0={[0, 0.35, 0]} maxPolarAngle={1.45} />

         <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

         {/* let color = new Color(0, 0, 0); */}
         <color args={[0, 0, 0]} attach="background" />

         <CubeCamera resolution={256} frames={Infinity}>
            {(texture) => (
               <>
                  <Environment map={texture} />
                  <Car />
               </>
            )}
         </CubeCamera>

         {/*
            let spotlight = new Spotlight()
            spotlight.intensity = 1.5;
            spotlight.position.set(...)
         */}
         <spotLight
            color={[1, 0.25, 0.7]}
            intensity={1.5}
            angle={0.6}
            penumbra={0.5}
            position={[5, 5, 0]}
            castShadow
            shadow-bias={-0.001}
         />

         <spotLight 
            color={[0.14, 0.5, 1]}
            intensity={2}
            angle={0.6}
            penumbra={0.5}
            position={[-5, 5, 0]}
            castShadow
            shadow-bias={-0.001}
         />

         <Ground />

         {/* <EffectComposer>
            <DepthOfField focusDistance={0.005} focalLength={0.01} bokehScale={1} height={480} />
            <Bloom 
               blendFunction={BlendFunction.ADD}
               intensity={1.3}                        // bloom intensity
               width={300}                            // render width
               height={300}                           // render height
               kernelSize={5}                         // blur kernel size
               luminanceThreshold={0.15}              // luminance threshold. higher -> mask more darker elements
               luminanceSmoothing={0.025}             // range [0, 1]
            />
         </EffectComposer> */}
      </>
   );
}

function App() {
   return (
      <>
         <Header />
         <Suspense fallback={null}>
            <Canvas shadows>
               <CarShow />
            </Canvas>
         </Suspense>
         <MenuLayout />
      </>
   );
}

export default App;