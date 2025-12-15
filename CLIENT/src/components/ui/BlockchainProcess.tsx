"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Database, FileText, Hash, Network, CheckCircle, ArrowRight, Play, RefreshCw, Download, ExternalLink, Award } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { generateCertificateData, formatCertificateText } from "@/lib/utils/certificateGenerator";

export const BlockchainProcess = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [transactionData, setTransactionData] = useState("");
    const [hash, setHash] = useState("");
    const [verified, setVerified] = useState(false);
    const [hasCompleted, setHasCompleted] = useState(false);
    const [isGeneratingCertificate, setIsGeneratingCertificate] = useState(false);

    const steps = [
        {
            id: 0,
            icon: FileText,
            title: "Request",
            description: "User initiates a transaction",
            color: "text-blue-400",
            bg: "bg-blue-500/20",
            border: "border-blue-500",
        },
        {
            id: 1,
            icon: Network,
            title: "Verification",
            description: "P2P network validates data",
            color: "text-purple-400",
            bg: "bg-purple-500/20",
            border: "border-purple-500",
        },
        {
            id: 2,
            icon: Hash,
            title: "Hashing",
            description: "Data is cryptographically secured",
            color: "text-pink-400",
            bg: "bg-pink-500/20",
            border: "border-pink-500",
        },
        {
            id: 3,
            icon: Database,
            title: "Chaining",
            description: "Block added to the chain",
            color: "text-teal-400",
            bg: "bg-teal-500/20",
            border: "border-teal-500",
        },
        {
            id: 4,
            icon: CheckCircle,
            title: "Complete",
            description: "Transaction is immutable",
            color: "text-green-400",
            bg: "bg-green-500/20",
            border: "border-green-500",
        },
    ];

    // Get current icon for rendering
    const CurrentIcon = steps[currentStep]?.icon || FileText;

    // Auto-play logic
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isAnimating && currentStep < steps.length - 1) {
            timer = setTimeout(() => {
                setCurrentStep(prev => prev + 1);
            }, 3000);
        } else if (isAnimating && currentStep === steps.length - 1) {
            setIsAnimating(false);
            setHasCompleted(true);
        }
        return () => clearTimeout(timer);
    }, [isAnimating, currentStep]);

    // Live Hash Generator
    useEffect(() => {
        if (transactionData) {
            // Simple mock hash generation
            const mockHash = "0x" + Array.from(transactionData).map(c => c.charCodeAt(0).toString(16)).join("") + "...";
            setHash(mockHash);
        }
    }, [transactionData]);

    const handleStartDemo = () => {
        setCurrentStep(0);
        setIsAnimating(true);
        setTransactionData("Sending 10 BTC to Bob");
        setVerified(false);
    };

    const handleReset = () => {
        setCurrentStep(0);
        setIsAnimating(false);
        setTransactionData("");
        setHash("");
        setVerified(false);
        setHasCompleted(false);
    };

    const handleDownloadCertificate = () => {
        if (typeof window === "undefined") return;
        setIsGeneratingCertificate(true);

        try {
            const userName = "BlockStudy Learner";
            const data = generateCertificateData({
                userName,
                achievement: "Blockchain Basics Interactive Guide",
                date: new Date(),
                description: "Successfully completed the BlockStudy blockchain transaction walkthrough.",
            });

            const text = formatCertificateText(data);
            const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = "blockstudy-blockchain-basics-certificate.txt";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } finally {
            setIsGeneratingCertificate(false);
        }
    };

    return (
        <section id="how-it-works" className="py-20 px-4 relative bg-[#050510] overflow-hidden">
            {/* Background Grid Animation */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-slide-right pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        How It <span className="text-neon-blue">Works</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Experience the journey of a blockchain transaction in real-time.
                    </p>
                </motion.div>

                {/* Interactive Flow Container */}
                <div className="max-w-6xl mx-auto bg-[#0a0a0a]/90 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">

                    {/* Progress Bar */}
                    <div className="relative mb-12 px-4 md:px-12">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2 rounded-full" />
                        <motion.div
                            className="absolute top-1/2 left-0 h-1 bg-neon-blue -translate-y-1/2 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />

                        <div className="relative flex justify-between">
                            {steps.map((step, index) => {
                                const isActive = index === currentStep;
                                const isCompleted = index < currentStep;

                                return (
                                    <motion.button
                                        key={step.id}
                                        onClick={() => {
                                            setCurrentStep(index);
                                            setIsAnimating(false);
                                        }}
                                        className={`relative w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isActive || isCompleted
                                            ? `${step.bg} ${step.border} ${step.color} shadow-[0_0_15px_currentColor]`
                                            : "bg-[#0a0a0a] border-gray-700 text-gray-600"
                                            }`}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <step.icon size={20} />
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-ring"
                                                className="absolute inset-0 -m-2 border-2 border-white/20 rounded-full animate-pulse"
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Main Interactive Stage */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[400px]">

                        {/* Left: Visual Animation */}
                        <div className="relative h-full flex items-center justify-center bg-black/40 rounded-xl border border-white/5 p-8 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center"
                                >
                                    <div className={`w-32 h-32 mx-auto rounded-full ${steps[currentStep].bg} flex items-center justify-center mb-6 relative`}>
                                        <CurrentIcon size={64} className={steps[currentStep].color} />

                                        {/* Particle Effects */}
                                        <div className="absolute inset-0">
                                            {[...Array(3)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className={`absolute inset-0 rounded-full border ${steps[currentStep].border} opacity-20`}
                                                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <h3 className={`text-3xl font-bold mb-2 ${steps[currentStep].color}`}>
                                        {steps[currentStep].title}
                                    </h3>
                                    <p className="text-gray-400 text-lg">
                                        {steps[currentStep].description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right: Interactive Controls */}
                        <div className="space-y-6">
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-lg font-bold text-white">Transaction Terminal</h4>
                                    <div className="flex gap-2">
                                        <span className="w-3 h-3 rounded-full bg-red-500" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <span className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                </div>

                                {/* Step Specific Content */}
                                <div className="min-h-[200px]">
                                    {currentStep === 0 && (
                                        <div className="space-y-4">
                                            <label className="text-sm text-gray-400">Enter Transaction Details:</label>
                                            <input
                                                type="text"
                                                value={transactionData}
                                                onChange={(e) => setTransactionData(e.target.value)}
                                                placeholder="e.g., Send 5 ETH to Alice"
                                                className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:border-neon-blue outline-none transition-colors"
                                            />
                                            <button
                                                onClick={handleStartDemo}
                                                disabled={!transactionData}
                                                className="w-full py-3 bg-neon-blue text-black font-bold rounded hover:bg-neon-blue/80 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <Play size={18} /> Initiate Transaction
                                            </button>
                                        </div>
                                    )}

                                    {currentStep === 1 && (
                                        <div className="space-y-4 text-center">
                                            <div className="flex justify-center gap-4 mb-4">
                                                {[1, 2, 3].map((i) => (
                                                    <motion.div
                                                        key={i}
                                                        animate={{ scale: [1, 1.2, 1] }}
                                                        transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                                                        className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/50"
                                                    >
                                                        <Network size={24} className="text-purple-400" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                            <p className="text-purple-300 animate-pulse">Validating across 3 nodes...</p>
                                        </div>
                                    )}

                                    {currentStep === 2 && (
                                        <div className="space-y-4">
                                            <div className="bg-black/50 p-4 rounded border border-pink-500/30 font-mono text-xs break-all">
                                                <p className="text-gray-500 mb-2">// Input Data</p>
                                                <p className="text-white mb-4">"{transactionData}"</p>
                                                <p className="text-gray-500 mb-2">// SHA-256 Output</p>
                                                <motion.p
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="text-pink-400"
                                                >
                                                    {hash}
                                                </motion.p>
                                            </div>
                                        </div>
                                    )}

                                    {currentStep === 3 && (
                                        <div className="flex items-center justify-center gap-2">
                                            <motion.div
                                                initial={{ x: -50, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                className="w-20 h-20 bg-gray-800 rounded border border-gray-600 flex items-center justify-center"
                                            >
                                                <span className="text-gray-500">Block #100</span>
                                            </motion.div>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: 40 }}
                                                className="h-2 bg-teal-500"
                                            />
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="w-24 h-24 bg-teal-500/20 rounded border-2 border-teal-500 flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.3)]"
                                            >
                                                <span className="text-teal-400 font-bold">New Block</span>
                                            </motion.div>
                                        </div>
                                    )}

                                    {currentStep === 4 && (
                                        <div className="text-center space-y-4">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto border-2 border-green-500"
                                            >
                                                <CheckCircle size={40} className="text-green-400" />
                                            </motion.div>
                                            <h3 className="text-2xl font-bold text-white">Success!</h3>
                                            <p className="text-sm text-gray-400 max-w-sm mx-auto">
                                                You&apos;ve completed the blockchain transaction journey. Claim your{" "}
                                                <span className="text-neon-blue font-semibold">Blockchain Basics</span> certificate.
                                            </p>
                                            <button
                                                onClick={handleDownloadCertificate}
                                                disabled={isGeneratingCertificate}
                                                className="px-6 py-2 bg-neon-blue text-black rounded hover:bg-neon-blue/90 transition-colors flex items-center gap-2 mx-auto disabled:opacity-60"
                                            >
                                                <Award size={16} />
                                                {isGeneratingCertificate ? "Preparing certificate..." : "Download Certificate"}
                                            </button>
                                            <button
                                                onClick={handleReset}
                                                className="text-sm text-gray-500 hover:text-white flex items-center gap-1 mx-auto mt-4"
                                            >
                                                <RefreshCw size={14} /> Start New Transaction
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Link href="/tutorials" className="group p-6 bg-white/5 rounded-xl border border-white/10 hover:border-neon-blue/50 transition-all">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue">Start Learning</h4>
                        <p className="text-gray-400 text-sm mb-4">New to this? Check our beginner guides.</p>
                        <span className="text-neon-blue text-sm flex items-center gap-1">Go to Tutorials <ArrowRight size={14} /></span>
                    </Link>

                    <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-neon-purple/50 transition-all cursor-pointer">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-neon-purple">Download Cheat Sheet</h4>
                        <p className="text-gray-400 text-sm mb-4">Get the visual flow as a PDF.</p>
                        <span className="text-neon-purple text-sm flex items-center gap-1">Download PDF <Download size={14} /></span>
                    </div>

                    <Link href="/sandbox" className="group p-6 bg-white/5 rounded-xl border border-white/10 hover:border-neon-green/50 transition-all">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-neon-green">Try Sandbox</h4>
                        <p className="text-gray-400 text-sm mb-4">Build a mock blockchain node.</p>
                        <span className="text-neon-green text-sm flex items-center gap-1">Enter Lab <ArrowRight size={14} /></span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
