"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { LearningTodo } from "@/components/learning/LearningTodo";
import { motion } from "framer-motion";

export default function ProgressPage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-gray-400 mb-3">
            MY PROGRESS
          </p>
          <h1 className="text-4xl font-bold mb-3">Track your blockchain journey</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Use this to‑do list to keep track of what you&apos;ve learned, what you&apos;re
            practicing, and the goals you&apos;re working toward.
          </p>
        </motion.div>

        <LearningTodo />
      </div>

      <Footer />
    </main>
  );
}


