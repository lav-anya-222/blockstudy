"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { motion } from "framer-motion";
import { Box, Play } from "lucide-react";

export default function SandboxPage() {
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
                        Interactive <span className="text-neon-purple">Sandbox</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Build and test your own blockchain nodes in a safe environment.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto h-[500px] rounded-2xl border-2 border-dashed border-white/20 flex items-center justify-center bg-[#0a0a0a]">
                    <div className="text-center">
                        <Box size={64} className="mx-auto text-gray-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-400 mb-2">Sandbox Environment</h3>
                        <p className="text-gray-600 mb-6">Initialize a mock node to see a visual transaction flow.</p>
                        <button className="px-8 py-3 bg-neon-purple text-white rounded-lg font-bold hover:bg-neon-purple/80 transition-all flex items-center gap-2 mx-auto">
                            <Play size={20} /> Initialize Node
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
