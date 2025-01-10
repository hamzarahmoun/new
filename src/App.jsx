import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { UI } from "./components/UI";
import { Suspense } from "react";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <UI/>
      <Loader />
      <Canvas shadows camera={{ position: [-2, 1, 5], fov: 30 }}>
        <color attach="background" args={["#FF4500"]} /> {/* OrangeRed */}
        <fog attach="fog" args={["#FF4500", 5, 20]} /> {/* OrangeRed */}
        <group position-y={-1}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </>
  );
}

export default App;