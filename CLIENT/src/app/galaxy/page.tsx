"use client";

import { GalaxyView } from "@/components/3d/GalaxyView";

export default function GalaxyPage() {
    return (
        <div className="h-[calc(100vh-6rem)] w-full relative rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute top-4 left-4 z-10">
                <h1 className="text-2xl font-bold">Knowledge Galaxy 🌌</h1>
                <p className="text-gray-400 text-sm">Explore your learning universe in 3D</p>
            </div>
            <GalaxyView />
        </div>
    );
}
