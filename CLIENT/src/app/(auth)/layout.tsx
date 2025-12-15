"use client";

import { AnimatedParticles } from "@/components/3d/AnimatedParticles";
import Link from "next/link";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen relative flex items-center justify-center p-4">
            <AnimatedParticles />

            <div className="absolute top-8 left-8">
                <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    StudySphere
                </Link>
            </div>

            <div className="w-full max-w-md relative z-10">
                {children}
            </div>
        </div>
    );
}
