"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Lock, Unlock, Search, Clock, Zap, Database } from "lucide-react";

// --- Decentralization Demo ---
export const DecentralizationDemo = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-4">
            {/* Centralized */}
            <div className="text-center">
                <h4 className="text-neon-blue mb-4 font-bold">Centralized (Traditional)</h4>
                <div className="relative w-40 h-40 mx-auto">
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    >
                        {/* Center Node */}
                        <div className="w-8 h-8 bg-red-500 rounded-full z-10 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                        {/* Satellite Nodes */}
                        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-4 h-4 bg-gray-400 rounded-full"
                                style={{ rotate: deg, translateX: 60 }}
                            >
                                <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gray-600 -translate-y-1/2 -translate-x-full origin-right" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <p className="text-xs text-gray-400 mt-2">Single point of failure</p>
            </div>

            <ArrowRight className="text-gray-600 hidden md:block" />

            {/* Decentralized */}
            <div className="text-center">
                <h4 className="text-neon-green mb-4 font-bold">Decentralized (Blockchain)</h4>
                <div className="relative w-40 h-40 mx-auto">
                    <div className="absolute inset-0">
                        {/* Mesh Network */}
                        {[0, 72, 144, 216, 288].map((deg, i) => (
                            <motion.div
                                key={i}
                                className="absolute top-1/2 left-1/2 w-4 h-4 bg-neon-green rounded-full shadow-[0_0_10px_rgba(10,255,10,0.5)]"
                                style={{
                                    transform: `rotate(${deg}deg) translate(60px) rotate(-${deg}deg)`,
                                    marginLeft: '-8px', marginTop: '-8px'
                                }}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                            />
                        ))}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <motion.path
                                d="M80 20 L137 62 L115 129 L45 129 L23 62 Z"
                                fill="none"
                                stroke="#0aff0a"
                                strokeWidth="1"
                                strokeOpacity="0.3"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            />
                            <motion.path
                                d="M80 20 L115 129 M137 62 L45 129 M23 62 L115 129"
                                fill="none"
                                stroke="#0aff0a"
                                strokeWidth="0.5"
                                strokeOpacity="0.2"
                            />
                        </svg>
                    </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">Distributed power & security</p>
            </div>
        </div>
    );
};

// --- Security Demo ---
export const SecurityDemo = () => {
    const [input, setInput] = useState("");
    const [encrypted, setEncrypted] = useState("");

    useEffect(() => {
        // Simple Caesar Cipher (+1)
        setEncrypted(
            input.split("").map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join("")
        );
    }, [input]);

    return (
        <div className="space-y-6">
            <div className="bg-black/40 p-4 rounded-lg border border-neon-purple/30">
                <label className="block text-sm text-neon-purple mb-2">Enter a secret message:</label>
                <div className="flex items-center gap-2">
                    <Unlock className="w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type here..."
                        className="bg-transparent border-b border-gray-600 focus:border-neon-purple outline-none w-full text-white"
                    />
                </div>
            </div>

            <div className="flex justify-center">
                <motion.div
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                    <Lock className="w-8 h-8 text-neon-purple" />
                </motion.div>
            </div>

            <div className="bg-black/40 p-4 rounded-lg border border-neon-purple/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-purple/5 animate-pulse" />
                <label className="block text-sm text-neon-purple mb-2">Encrypted Hash (Simulation):</label>
                <p className="font-mono text-neon-purple break-all min-h-[24px]">
                    {encrypted || "Waiting for input..."}
                </p>
            </div>
            <p className="text-xs text-gray-500 text-center">
                *Real blockchain uses SHA-256 hashing, which is practically impossible to reverse.
            </p>
        </div>
    );
};

// --- Efficiency Demo ---
export const EfficiencyDemo = () => {
    const [mode, setMode] = useState<'traditional' | 'blockchain'>('traditional');

    return (
        <div className="space-y-6">
            <div className="flex justify-center bg-black/40 p-1 rounded-full w-fit mx-auto border border-white/10">
                <button
                    onClick={() => setMode('traditional')}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${mode === 'traditional' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}
                >
                    Traditional
                </button>
                <button
                    onClick={() => setMode('blockchain')}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${mode === 'blockchain' ? 'bg-neon-blue text-black font-bold shadow-[0_0_10px_rgba(0,243,255,0.5)]' : 'text-gray-400'}`}
                >
                    Blockchain
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg border transition-all duration-500 ${mode === 'traditional' ? 'border-red-500/50 bg-red-500/10' : 'border-white/5 opacity-50'}`}>
                    <div className="flex items-center gap-2 mb-2 text-red-400">
                        <Clock className="w-5 h-5" />
                        <span className="font-bold">Time</span>
                    </div>
                    <p className="text-2xl font-bold text-white mb-1">3-5 Days</p>
                    <p className="text-xs text-gray-400">Intermediaries delay processing</p>
                </div>

                <div className={`p-4 rounded-lg border transition-all duration-500 ${mode === 'blockchain' ? 'border-neon-blue bg-neon-blue/10' : 'border-white/5 opacity-50'}`}>
                    <div className="flex items-center gap-2 mb-2 text-neon-blue">
                        <Zap className="w-5 h-5" />
                        <span className="font-bold">Time</span>
                    </div>
                    <p className="text-2xl font-bold text-white mb-1">~10 Mins</p>
                    <p className="text-xs text-gray-400">Direct P2P transfer</p>
                </div>

                <div className={`p-4 rounded-lg border transition-all duration-500 ${mode === 'traditional' ? 'border-red-500/50 bg-red-500/10' : 'border-white/5 opacity-50'}`}>
                    <div className="flex items-center gap-2 mb-2 text-red-400">
                        <span className="font-bold">$ Cost</span>
                    </div>
                    <p className="text-2xl font-bold text-white mb-1">$25 - $50</p>
                    <p className="text-xs text-gray-400">High fees for banks/agents</p>
                </div>

                <div className={`p-4 rounded-lg border transition-all duration-500 ${mode === 'blockchain' ? 'border-neon-blue bg-neon-blue/10' : 'border-white/5 opacity-50'}`}>
                    <div className="flex items-center gap-2 mb-2 text-neon-blue">
                        <span className="font-bold">$ Cost</span>
                    </div>
                    <p className="text-2xl font-bold text-white mb-1">$0.50 - $2</p>
                    <p className="text-xs text-gray-400">Minimal network fees</p>
                </div>
            </div>
        </div>
    );
};

// --- Transparency Demo ---
export const TransparencyDemo = () => {
    const transactions = [
        { hash: "0x8f...2a1", from: "Alice", to: "Bob", amt: "50 BTC", time: "2s ago" },
        { hash: "0x3c...9b4", from: "Charlie", to: "Dave", amt: "120 ETH", time: "5s ago" },
        { hash: "0x1d...7e2", from: "Eve", to: "Frank", amt: "10 SOL", time: "12s ago" },
        { hash: "0x5a...3f8", from: "Grace", to: "Heidi", amt: "0.5 BTC", time: "15s ago" },
    ];

    return (
        <div className="bg-black/60 rounded-lg border border-neon-green/30 overflow-hidden">
            <div className="bg-neon-green/10 p-3 border-b border-neon-green/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-neon-green" />
                    <span className="text-neon-green font-mono text-sm font-bold">PUBLIC LEDGER</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-xs text-red-400">LIVE</span>
                </div>
            </div>

            <div className="p-2">
                <div className="grid grid-cols-4 gap-2 text-xs text-gray-500 mb-2 px-2">
                    <span>Hash</span>
                    <span>From/To</span>
                    <span>Amount</span>
                    <span>Time</span>
                </div>
                <div className="space-y-1">
                    {transactions.map((tx, i) => (
                        <motion.div
                            key={tx.hash}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="grid grid-cols-4 gap-2 text-xs p-2 rounded hover:bg-white/5 cursor-pointer border border-transparent hover:border-neon-green/30 transition-colors font-mono"
                        >
                            <span className="text-neon-blue">{tx.hash}</span>
                            <span className="text-gray-300">{tx.from} → {tx.to}</span>
                            <span className="text-white font-bold">{tx.amt}</span>
                            <span className="text-gray-400">{tx.time}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="p-2 bg-white/5 text-center">
                <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
                    <Search className="w-3 h-3" />
                    Anyone can verify these transactions instantly.
                </p>
            </div>
        </div>
    );
};
