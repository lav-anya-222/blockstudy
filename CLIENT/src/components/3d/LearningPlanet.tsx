"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float, Trail } from "@react-three/drei";
import * as THREE from "three";

interface LearningPlanetProps {
    position: [number, number, number];
    color: string;
    size: number;
    label: string;
    progress: number;
    onClick?: () => void;
}

export const LearningPlanet = ({
    position,
    color,
    size,
    label,
    progress,
    onClick
}: LearningPlanetProps) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5;
            meshRef.current.rotation.x += delta * 0.2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={position}>
                <mesh
                    ref={meshRef}
                    onClick={onClick}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                    scale={hovered ? 1.2 : 1}
                >
                    <sphereGeometry args={[size, 32, 32]} />
                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={hovered ? 0.5 : 0.2}
                        roughness={0.4}
                        metalness={0.6}
                    />
                </mesh>

                {/* Planet Ring for Progress */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[size * 1.4, 0.05, 16, 100]} />
                    <meshStandardMaterial color={color} opacity={0.5} transparent />
                </mesh>

                <Text
                    position={[0, size + 0.5, 0]}
                    fontSize={0.3}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                >
                    {label}
                </Text>

                <Text
                    position={[0, size + 0.2, 0]}
                    fontSize={0.2}
                    color="#a1a1aa"
                    anchorX="center"
                    anchorY="middle"
                >
                    {progress}%
                </Text>
            </group>
        </Float>
    );
};
