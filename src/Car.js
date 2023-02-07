import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import { Mesh } from "three";

// TODO: give credits to 3d modelling owner
export function Car() {
   
   const gltf = useLoader(
      GLTFLoader,
      "./models/car/scene.gltf"
   );

   useEffect(() => {
      gltf.scene.scale.set(1, 1, 1);
      gltf.scene.position.set(0, -0.25, 0);
      gltf.scene.traverse((object) => {
         if(object instanceof Mesh) {
               object.castShadow = true;
               object.receiveShadow = true;
               object.material.envMapIntensity = 20;
         }
      });
   }, [gltf]);

   return <primitive object={gltf.scene} />
}