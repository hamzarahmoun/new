import { Environment, Float, Gltf, TransformControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useRef } from "react";
import { MathUtils } from "three";
import { skibidiAtom } from "./UI";
export const Experience = () => {


  return (
    <>
      <Environment preset="sunset" />
        <Float
          position={[2.5, 1, 1]}
          speed={6}
          floatIntensity={3}
          rotationIntensity={2}
        >
          <Gltf scale={0.2} src="/models/Kebab.glb" castShadow />
        </Float>
        <Float
          position={[-2.5, 1, 1]}
          speed={8}
          floatIntensity={2}
          rotationIntensity={6}
        >
          <Gltf scale={0.2} src="/models/Kebab.glb" castShadow />
        </Float>
        <Float
          position={[0, 1, -2.5]}
          speed={12}
          rotationIntensity={4}
          floatIntensity={3}
        >
          <Gltf scale={0.2} src="/models/Kebab.glb" castShadow />
        </Float>
     
    </>
  );
};