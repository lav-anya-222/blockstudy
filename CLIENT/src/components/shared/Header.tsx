"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export const Header = () => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-lg"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    StudySphere
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-primary-blue transition-colors">
                        Features
                    </Link>
                    <Link href="#demo" className="text-sm font-medium text-gray-300 hover:text-primary-blue transition-colors">
                        Demo
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-gray-300 hover:text-primary-blue transition-colors">
                        Pricing
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/login">
                        <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-primary-blue transition-colors">
                            Login
                        </button>
                    </Link>
                    <Link href="/register">
                        <button className="px-4 py-2 text-sm font-medium bg-primary-blue hover:bg-blue-600 text-white rounded-full transition-colors">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </motion.header>
    );
};
