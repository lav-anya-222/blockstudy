"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { RefreshCw, Check, X, RotateCw } from "lucide-react";

interface Flashcard {
    id: number;
    question: string;
    answer: string;
    mastery: number; // 0-100
}

const sampleCards: Flashcard[] = [
    { id: 1, question: "What is the speed of light?", answer: "299,792,458 m/s", mastery: 80 },
    { id: 2, question: "Who proposed the Theory of Relativity?", answer: "Albert Einstein", mastery: 95 },
    { id: 3, question: "What is the powerhouse of the cell?", answer: "Mitochondria", mastery: 100 },
    { id: 4, question: "What is the derivative of sin(x)?", answer: "cos(x)", mastery: 40 },
];

export const FlashcardGarden = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [cards, setCards] = useState(sampleCards);

    const currentCard = cards[currentIndex];

    const handleNext = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % cards.length);
        }, 300);
    };

    const handleFlip = () => setIsFlipped(!isFlipped);

    return (
        <div className="flex flex-col items-center justify-center min-h-[500px] w-full max-w-2xl mx-auto">
            <div className="relative w-full aspect-video cursor-pointer perspective-1000" onClick={handleFlip}>
                <motion.div
                    className="w-full h-full relative preserve-3d transition-all duration-500"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Front */}
                    <GlassCard className="absolute inset-0 backface-hidden flex items-center justify-center p-8 text-center border-2 border-blue-500/20">
                        <div>
                            <span className="text-sm text-blue-400 font-medium uppercase tracking-wider mb-4 block">Question</span>
                            <h3 className="text-2xl md:text-3xl font-bold">{currentCard.question}</h3>
                        </div>
                        <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                            Click to flip
                        </div>
                    </GlassCard>

                    {/* Back */}
                    <GlassCard
                        className="absolute inset-0 backface-hidden flex items-center justify-center p-8 text-center border-2 border-purple-500/20"
                        style={{ transform: "rotateY(180deg)" }}
                    >
                        <div>
                            <span className="text-sm text-purple-400 font-medium uppercase tracking-wider mb-4 block">Answer</span>
                            <h3 className="text-2xl md:text-3xl font-bold">{currentCard.answer}</h3>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-6 mt-8">
                <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="p-4 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                    title="Hard / Forgot"
                >
                    <X size={24} />
                </button>

                <div className="text-center">
                    <p className="text-sm text-gray-400 mb-1">Card {currentIndex + 1} of {cards.length}</p>
                    <div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-500 transition-all duration-300"
                            style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
                        />
                    </div>
                </div>

                <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="p-4 rounded-full bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors"
                    title="Easy / Remembered"
                >
                    <Check size={24} />
                </button>
            </div>
        </div>
    );
};
