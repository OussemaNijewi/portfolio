import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";

const Model = ({ model }) => {
  const scene = useGLTF(model.modelPath);
  const groupRef = useRef();

  return (
    <group ref={groupRef} scale={model.scale || 1} rotation={model.rotation}>
      <primitive object={scene.scene} />
    </group>
  );
};

const ModelCanvas = ({ model }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Environment preset="city" />

      {/* rotation only */}
      <OrbitControls enableZoom={false} />

      <Model model={model} />
    </Canvas>
  );
};

export default ModelCanvas;
