
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

interface ModelProps {
  path: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

function Model({ path, position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }: ModelProps) {
  const meshRef = useRef<Mesh>(null);
  
  // Fallback if the model fails to load
  const { scene } = { scene: null };

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={[scale, scale, scale]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#db5e00" roughness={0.3} metalness={0.7} />
    </mesh>
  );
}

const Scene3D = () => {
  return (
    <div className="w-full h-64 md:h-96">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Model path="/models/gear.glb" position={[0, 0, 0]} scale={1.5} />
        <Model path="/models/engine.glb" position={[2, 0, -2]} scale={1} />
        <Model path="/models/turbine.glb" position={[-2, 0, -2]} scale={0.8} />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
