"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Plane, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface StudyRoom3DProps {
  roomId: string;
  participants: number;
}

export const StudyRoom3D: React.FC<StudyRoom3DProps> = ({ roomId, participants }) => {
  const roomRef = useRef<THREE.Group>(null);

  useFrame(() => {
    // Subtle animation for the room
  });

  return (
    <>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      
      <group ref={roomRef}>
        {/* Room floor */}
        <Plane args={[10, 10]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Plane>
        
        {/* Room walls */}
        <Box args={[10, 5, 0.1]} position={[0, 2.5, -5]}>
          <meshStandardMaterial color="#2a2a2a" />
        </Box>
        <Box args={[0.1, 5, 10]} position={[-5, 2.5, 0]}>
          <meshStandardMaterial color="#2a2a2a" />
        </Box>
        <Box args={[0.1, 5, 10]} position={[5, 2.5, 0]}>
          <meshStandardMaterial color="#2a2a2a" />
        </Box>
        
        {/* Study table */}
        <Box args={[4, 0.2, 2]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#3a3a3a" />
        </Box>
        
        {/* Participant indicators */}
        {Array.from({ length: Math.min(participants, 4) }).map((_, i) => {
          const angle = (i / Math.min(participants, 4)) * Math.PI * 2;
          const radius = 1.5;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          
          return (
            <Sphere key={i} args={[0.3, 16, 16]} position={[x, 0.8, z]}>
              <meshStandardMaterial
                color={i === 0 ? '#3b82f6' : '#8b5cf6'}
                emissive={i === 0 ? '#3b82f6' : '#8b5cf6'}
                emissiveIntensity={0.5}
              />
            </Sphere>
          );
        })}
      </group>
    </>
  );
};

