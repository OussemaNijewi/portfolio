import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Model = ({ model }) => {
  const scene = useGLTF(model.modelPath);
  const groupRef = useRef();

  const [scale, setScale] = useState(model.scale || 1);

  return (
    <group
      ref={groupRef}
      scale={scale}
      rotation={model.rotation}
      onWheel={(e) => {
        e.stopPropagation();

        setScale((prev) => {
          const next = prev + e.deltaY * -0.001;
          return Math.min(Math.max(next, 0.3), 5); // clamp
        });
      }}
    >
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
