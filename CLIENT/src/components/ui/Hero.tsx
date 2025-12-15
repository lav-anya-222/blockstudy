"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock, Shield, Zap } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                        <span className="text-sm text-gray-300 tracking-wider">NEXT GEN EDUCATION</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Unleashing the Power of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple neon-text">
                            BLOCKCHAIN
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Master the decentralized future with our immersive, interactive platform.
                        Secure, transparent, and built for the next generation of developers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-neon-blue text-black font-bold rounded-lg shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] transition-all flex items-center gap-2"
                        >
                            <Link href="/tutorials" className="flex items-center gap-2">
                                <span>Start Learning</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-all backdrop-blur-sm"
                        >
                            <Link href="/about" className="block">
                                View Curriculum
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>

                {/* Floating Icons */}
                <div className="absolute top-1/2 left-10 hidden lg:block">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="p-4 bg-black/50 border border-neon-blue/30 rounded-xl backdrop-blur-md"
                    >
                        <Shield className="w-8 h-8 text-neon-blue" />
                    </motion.div>
                </div>
                <div className="absolute top-1/3 right-10 hidden lg:block">
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="p-4 bg-black/50 border border-neon-purple/30 rounded-xl backdrop-blur-md"
                    >
                        <Lock className="w-8 h-8 text-neon-purple" />
                    </motion.div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050510] to-transparent" />
        </section>
    );
};
