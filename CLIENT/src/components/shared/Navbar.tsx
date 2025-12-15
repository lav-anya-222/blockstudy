"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Why Blockchain", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "My Progress", href: "/progress" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-[#050510]/80 backdrop-blur-md border-b border-neon-blue/20"
                    : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 flex items-center justify-center bg-neon-blue/10 rounded-lg border border-neon-blue/30 group-hover:border-neon-blue/60 transition-colors">
                            <Zap className="w-6 h-6 text-neon-blue group-hover:text-white transition-colors" />
                            <div className="absolute inset-0 bg-neon-blue/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-2xl font-bold text-white tracking-wider">
                            BLOCK<span className="text-neon-blue">STUDY</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-neon-blue transition-colors text-sm font-medium tracking-wide relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full" />
                            </Link>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-[#050510] border-b border-neon-blue/20 p-4"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-neon-blue transition-colors py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button className="w-full px-6 py-3 bg-neon-blue/10 border border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-black transition-all rounded font-medium">
                                GET STARTED
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};
