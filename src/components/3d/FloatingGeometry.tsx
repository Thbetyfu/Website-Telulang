import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, BoxGeometry, SphereGeometry, TorusGeometry, MeshStandardMaterial } from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  rotationSpeed: number;
  scale: number;
  geometry: 'box' | 'sphere' | 'torus';
  color: string;
}

export function FloatingGeometry({ 
  position, 
  rotationSpeed, 
  scale, 
  geometry, 
  color 
}: FloatingGeometryProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geometry === 'box' && <primitive object={new BoxGeometry(1, 1, 1)} />}
      {geometry === 'sphere' && <primitive object={new SphereGeometry(0.6, 32, 32)} />}
      {geometry === 'torus' && <primitive object={new TorusGeometry(0.5, 0.2, 16, 32)} />}
      <primitive 
        object={new MeshStandardMaterial({ 
          color: color,
          transparent: true,
          opacity: 0.8,
          roughness: 0.1,
          metalness: 0.9
        })} 
      />
    </mesh>
  );
}
