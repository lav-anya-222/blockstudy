"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { motion } from "framer-motion";
import { BookOpen, Code, Terminal } from "lucide-react";
import Link from "next/link";

export default function TutorialsPage() {
    const tutorialLinks = [
        { title: "Blockchain Basics", level: "Beginner", icon: BookOpen, color: "blue", href: "/blog" },
        { title: "Smart Contracts 101", level: "Intermediate", icon: Code, color: "purple", href: "/blog" },
        { title: "DApp Development", level: "Advanced", icon: Terminal, color: "green", href: "/blog" },
    ];

    return (
        <main className="min-h-screen bg-[#050510] text-white">
            <Navbar />
            <div className="container mx-auto px-4 pt-32 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold mb-6">
                        Blockchain <span className="text-neon-blue">Tutorials</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Start your journey from zero to blockchain hero.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tutorialLinks.map((tutorial, i) => (
                        <Link key={tutorial.title} href={tutorial.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-neon-blue/50 transition-all group cursor-pointer h-full"
                            >
                                <div className={`w-12 h-12 rounded-lg bg-${tutorial.color}-500/20 flex items-center justify-center mb-6 text-${tutorial.color}-400 group-hover:scale-110 transition-transform`}>
                                    <tutorial.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{tutorial.title}</h3>
                                <span className="text-sm text-gray-500 border border-gray-700 px-2 py-1 rounded">
                                    {tutorial.level}
                                </span>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
