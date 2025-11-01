import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { FloatingGeometry } from './FloatingGeometry';

export function ThreeScene() {
  return (
    <div className="h-64 w-full relative">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 60 }}
        className="bg-transparent"
        gl={{ alpha: true, antialias: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#ff6b6b" intensity={0.5} />
        
        {/* Environment for reflections */}
        <Environment preset="night" />
        
        {/* Floating 3D Objects */}
        <FloatingGeometry
          position={[-2, 0, 0]}
          rotationSpeed={0.01}
          scale={0.8}
          geometry="box"
          color="#00d4ff"
        />
        
        <FloatingGeometry
          position={[2, 1, -1]}
          rotationSpeed={0.008}
          scale={0.6}
          geometry="sphere"
          color="#ff6b6b"
        />
        
        <FloatingGeometry
          position={[0, -1, 1]}
          rotationSpeed={0.012}
          scale={0.7}
          geometry="torus"
          color="#4ecdc4"
        />
        
        {/* Interactive controls (optional) */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
