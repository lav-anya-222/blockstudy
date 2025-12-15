"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Zap } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050510] text-white flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neon-blue/10 border border-neon-blue/40 mb-4">
            <Zap className="w-8 h-8 text-neon-blue" />
          </div>
          <h1 className="text-4xl font-bold mb-2">404 — Block not found</h1>
          <p className="text-gray-400">
            The page you&apos;re looking for isn&apos;t on this chain yet. It may have moved or never
            been created.
          </p>
        </motion.div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/20 hover:border-neon-blue hover:text-neon-blue transition-colors text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>
    </main>
  );
}


