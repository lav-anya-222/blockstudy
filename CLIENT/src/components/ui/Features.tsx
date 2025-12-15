"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Globe, Layers, Trophy } from "lucide-react";
import { FeatureCard } from "./FeatureCard";
import { FeatureModal } from "./FeatureModal";
import { useState } from "react";

type FeatureType = 'decentralization' | 'security' | 'efficiency' | 'transparency';

interface FeatureData {
    title: string;
    description: string;
    type: FeatureType;
    color: string;
}

export const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState<FeatureData | null>(null);
    const [visitedFeatures, setVisitedFeatures] = useState<string[]>([]);

    const handleFeatureClick = (feature: FeatureData) => {
        setSelectedFeature(feature);
        if (!visitedFeatures.includes(feature.type)) {
            setVisitedFeatures(prev => [...prev, feature.type]);
        }
    };

    const allVisited = visitedFeatures.length === 4;

    return (
        <section id="features" className="py-20 px-4 relative">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        Why <span className="text-neon-blue">Blockchain?</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        Redefining trust in the digital world. Click on each card to explore.
                    </p>

                    {/* Progress Tracker */}
                    <div className="inline-flex items-center gap-4 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                        <span className="text-sm text-gray-300">Exploration Progress:</span>
                        <div className="flex gap-1">
                            {[0, 1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className={`w-8 h-2 rounded-full transition-all duration-500 ${i < visitedFeatures.length ? "bg-neon-green shadow-[0_0_10px_#0aff0a]" : "bg-gray-700"
                                        }`}
                                />
                            ))}
                        </div>
                        {allVisited && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="flex items-center gap-1 text-neon-green text-xs font-bold ml-2"
                            >
                                <Trophy size={14} />
                                <span>MASTER!</span>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard
                        icon={Globe}
                        title="Decentralization"
                        description="No single entity controls the system. Power is distributed across the network."
                        color="blue"
                        delay={0}
                        onClick={() => handleFeatureClick({
                            title: "Decentralization",
                            description: "A distributed network where no single entity has control.",
                            type: "decentralization",
                            color: "blue"
                        })}
                    />
                    <FeatureCard
                        icon={Shield}
                        title="Security"
                        description="Encrypted and tamper-proof data using advanced cryptography."
                        color="purple"
                        delay={0.1}
                        onClick={() => handleFeatureClick({
                            title: "Cryptographic Security",
                            description: "Unbreakable encryption protecting every transaction.",
                            type: "security",
                            color: "purple"
                        })}
                    />
                    <FeatureCard
                        icon={Zap}
                        title="Efficiency"
                        description="Faster, cost-effective processes without intermediaries."
                        color="teal"
                        delay={0.2}
                        onClick={() => handleFeatureClick({
                            title: "Network Efficiency",
                            description: "Removing middlemen to speed up the world.",
                            type: "efficiency",
                            color: "teal"
                        })}
                    />
                    <FeatureCard
                        icon={Layers}
                        title="Transparency"
                        description="Public, accountable transactions that anyone can verify."
                        color="pink"
                        delay={0.3}
                        onClick={() => handleFeatureClick({
                            title: "Radical Transparency",
                            description: "A public ledger that never lies and never forgets.",
                            type: "transparency",
                            color: "pink"
                        })}
                    />
                </div>
            </div>

            <FeatureModal
                isOpen={!!selectedFeature}
                onClose={() => setSelectedFeature(null)}
                feature={selectedFeature}
            />
        </section>
    );
};
