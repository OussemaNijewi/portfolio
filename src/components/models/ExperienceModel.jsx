import { useGLTF } from "@react-three/drei";

const ExperienceModel = ({ path }) => {
  const { scene } = useGLTF(path);

  return <primitive object={scene} scale={1.5} />;
};

export default ExperienceModel;
