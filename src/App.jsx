import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { UI } from "./components/UI";

function App() {
  return (
    <>
      <UI/>
      <Loader />
      <Canvas shadows camera={{ position: [-2, 1, 5], fov: 30 }}>
        <color attach="background" args={["#501899"]} />
        <fog attach="fog" args={["#501899", 5, 20]} />
       
      </Canvas>
    </>
  );
}

export default App;