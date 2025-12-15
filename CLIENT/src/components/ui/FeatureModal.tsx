"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { DecentralizationDemo, SecurityDemo, EfficiencyDemo, TransparencyDemo } from "./InteractiveDemos";

interface FeatureModalProps {
    isOpen: boolean;
    onClose: () => void;
    feature: {
        title: string;
        description: string;
        type: 'decentralization' | 'security' | 'efficiency' | 'transparency';
        color: string;
    } | null;
}

export const FeatureModal: React.FC<FeatureModalProps> = ({ isOpen, onClose, feature }) => {
    if (!feature) return null;

    const renderDemo = () => {
        switch (feature.type) {
            case 'decentralization': return <DecentralizationDemo />;
            case 'security': return <SecurityDemo />;
            case 'efficiency': return <EfficiencyDemo />;
            case 'transparency': return <TransparencyDemo />;
            default: return null;
        }
    };

    const getColorClass = (color: string) => {
        switch (color) {
            case 'blue': return 'text-neon-blue border-neon-blue shadow-neon-blue';
            case 'purple': return 'text-neon-purple border-neon-purple shadow-neon-purple';
            case 'green': return 'text-neon-green border-neon-green shadow-neon-green';
            case 'teal': return 'text-teal-400 border-teal-400 shadow-teal-400';
            case 'pink': return 'text-pink-400 border-pink-400 shadow-pink-400';
            default: return 'text-white border-white shadow-white';
        }
    };

    const colorClass = getColorClass(feature.color);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`bg-[#0a0a0a] border-2 rounded-2xl w-full max-w-2xl overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)] ${colorClass.replace('text-', 'border-')}`}
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-white/10 flex justify-between items-start">
                                <div>
                                    <h3 className={`text-2xl font-bold mb-2 ${colorClass.split(' ')[0]}`}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 bg-[#050510]">
                                {renderDemo()}
                            </div>

                            {/* Footer */}
                            <div className="p-4 bg-black/40 border-t border-white/10 text-center">
                                <p className="text-xs text-gray-500">
                                    Interactive Demo • Click outside to close
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
