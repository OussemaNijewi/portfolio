import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ExperienceModel from "./ExperienceModel";

const ExperienceCanvas = ({ modelPath }) => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      <ExperienceModel path={modelPath} />

      <OrbitControls enableZoom={false} />
      <Environment preset="city" />
    </Canvas>
  );
};

export default ExperienceCanvas;
