"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Lock, Rocket, Sparkles } from "lucide-react";

type LevelId = "beginner" | "intermediate" | "advanced";

interface PathStep {
  id: LevelId;
  label: string;
  emoji: string;
  title: string;
  description: string;
  highlight: string;
}

const steps: PathStep[] = [
  {
    id: "beginner",
    label: "Level 1",
    emoji: "📘",
    title: "Blockchain Basics",
    description: "Understand blocks, chains, decentralization and why blockchain matters.",
    highlight: "Perfect if you're starting from zero.",
  },
  {
    id: "intermediate",
    label: "Level 2",
    emoji: "📙",
    title: "Smart Contracts",
    description: "Learn how logic is encoded on-chain and see real-world contract examples.",
    highlight: "Start thinking like a Web3 developer.",
  },
  {
    id: "advanced",
    label: "Level 3",
    emoji: "📗",
    title: "Build a DApp",
    description: "Connect smart contracts to beautiful frontends and ship a full DApp.",
    highlight: "Turn skills into portfolio-ready projects.",
  },
];

const STORAGE_KEY = "blockstudy-learning-level";

export const LearningPath = () => {
  const [current, setCurrent] = useState<LevelId>("beginner");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as LevelId | null;
    if (stored && steps.some((s) => s.id === stored)) {
      setCurrent(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, current);
  }, [current]);

  const currentIndex = steps.findIndex((s) => s.id === current);

  return (
    <section className="py-20 px-4 relative border-t border-white/10 bg-[#050510]">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/5 via-transparent to-neon-purple/10 pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.18em] text-gray-300 mb-4">
            <Sparkles className="w-3 h-3 text-neon-blue" />
            Start Your Journey
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Your Blockchain <span className="text-neon-blue">Learning Path</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow a curated path from complete beginner to DApp builder. We track your current level on this device so you can
            pick up where you left off.
          </p>
        </motion.div>

        {/* Progress rail */}
        <div className="relative mb-10">
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-white/10 rounded-full -translate-y-1/2" />
          <motion.div
            className="absolute left-0 top-1/2 h-1 bg-neon-blue rounded-full -translate-y-1/2"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
          <div className="relative flex justify-between">
            {steps.map((step, index) => {
              const isCompleted = index < currentIndex;
              const isActive = step.id === current;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setCurrent(step.id)}
                  className="group relative flex flex-col items-center gap-2 focus:outline-none"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 text-sm
                    ${isActive
                        ? "bg-neon-blue/20 border-neon-blue text-neon-blue shadow-[0_0_18px_rgba(56,189,248,0.7)]"
                        : isCompleted
                          ? "bg-emerald-500/10 border-emerald-400 text-emerald-300"
                          : "bg-[#050510] border-white/15 text-gray-400"
                      }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : step.emoji}
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-gray-400">{step.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const isActive = step.id === current;
            const isLocked = index > currentIndex;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative rounded-2xl border p-6 bg-[#050510]/90 backdrop-blur-sm flex flex-col gap-4
                ${isActive ? "border-neon-blue shadow-[0_0_30px_rgba(56,189,248,0.4)]" : "border-white/10"}
                ${isLocked ? "opacity-70" : ""}`}
              >
                {isActive && (
                  <span className="absolute -top-3 left-4 px-3 py-1 rounded-full bg-neon-blue text-black text-[11px] font-semibold tracking-[0.18em]">
                    CURRENT
                  </span>
                )}

                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">{step.label}</p>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  {isLocked ? (
                    <Lock className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Rocket className={`w-5 h-5 ${isActive ? "text-neon-blue" : "text-gray-500"}`} />
                  )}
                </div>

                <p className="text-sm text-gray-300">{step.description}</p>
                <p className="text-xs text-neon-blue/80">{step.highlight}</p>

                <div className="mt-auto pt-2">
                  <button
                    type="button"
                    onClick={() => setCurrent(step.id)}
                    className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase
                    ${isLocked ? "text-gray-500 cursor-not-allowed" : "text-neon-blue hover:text-neon-blue/80"}`}
                    disabled={isLocked}
                  >
                    {isActive ? "Continue here" : isLocked ? "Locked – complete previous level" : "Jump into this level"}
                    {!isLocked && <ArrowRight className="w-3 h-3" />}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


