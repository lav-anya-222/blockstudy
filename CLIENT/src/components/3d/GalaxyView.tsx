"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { LearningPlanet } from "./LearningPlanet";
import { Suspense } from "react";

const planets = [
    { id: 1, label: "Physics", color: "#3b82f6", size: 0.8, position: [-2, 0, 0], progress: 75 },
    { id: 2, label: "Math", color: "#8b5cf6", size: 1.0, position: [0, 0, 0], progress: 45 },
    { id: 3, label: "Chemistry", color: "#10b981", size: 0.7, position: [2, 0.5, 0], progress: 90 },
    { id: 4, label: "History", color: "#f59e0b", size: 0.6, position: [1, -1.5, 1], progress: 30 },
];

export const GalaxyView = () => {
    return (
        <div className="h-full w-full min-h-[400px] rounded-2xl overflow-hidden bg-black/20 relative">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                    {planets.map((planet) => (
                        <LearningPlanet
                            key={planet.id}
                            position={planet.position as [number, number, number]}
                            color={planet.color}
                            size={planet.size}
                            label={planet.label}
                            progress={planet.progress}
                        />
                    ))}

                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Suspense>
            </Canvas>

            <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                Drag to rotate • Scroll to zoom
            </div>
        </div>
    );
};
