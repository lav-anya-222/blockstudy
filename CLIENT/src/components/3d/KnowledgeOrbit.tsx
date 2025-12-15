"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface KnowledgeOrbitProps {
  planets: Array<{
    id: string;
    subject: string;
    progress: number;
    color: string;
    position: [number, number, number];
  }>;
}

export const KnowledgeOrbit: React.FC<KnowledgeOrbitProps> = ({ planets }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <group ref={groupRef}>
        {planets.map((planet) => (
          <group key={planet.id} position={planet.position}>
            <Sphere args={[0.5, 32, 32]}>
              <meshStandardMaterial
                color={planet.color}
                emissive={planet.color}
                emissiveIntensity={0.3}
              />
            </Sphere>
            {/* Progress ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.6, 0.7, 32]} />
              <meshBasicMaterial
                color={planet.color}
                transparent
                opacity={planet.progress / 100}
              />
            </mesh>
          </group>
        ))}
      </group>
    </>
  );
};

