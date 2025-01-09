import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";
import React, { useEffect, useRef } from "react";
import { WiggleBone } from "wiggle/spring";
import { wiggleAtom } from "./UI";

export function Skibidi({ animation, ...props }) {
  const group = useRef();
  const { nodes, scene, animations } = useGLTF(`/models/skibidi.glb`);
 
  return (
    <group {...props}>
      <group ref={group} dispose={null}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload(`/models/skibidi.glb`);