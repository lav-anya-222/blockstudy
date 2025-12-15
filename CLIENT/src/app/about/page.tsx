"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-gray-400 mb-3">
            ABOUT BLOCKSTUDY
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Demystifying <span className="text-neon-blue">Blockchain</span> for Everyone
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            BlockStudy exists to turn confusing web3 jargon into clear, practical learning
            experiences—so you can understand the tech that&apos;s reshaping finance, ownership,
            and the internet itself.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl bg-[#0a0a15] border border-white/10 p-6"
          >
            <h2 className="text-lg font-semibold mb-2">Our Mission</h2>
            <p className="text-sm text-gray-400">
              Make world-class blockchain education accessible, engaging, and genuinely useful for
              builders, analysts, and curious learners worldwide.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-[#0a0a15] border border-white/10 p-6"
          >
            <h2 className="text-lg font-semibold mb-2">Who We Serve</h2>
            <p className="text-sm text-gray-400">
              From complete beginners to aspiring blockchain engineers, we design content that
              meets you where you are and helps you reach the next level.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl bg-[#0a0a15] border border-white/10 p-6"
          >
            <h2 className="text-lg font-semibold mb-2">How We Teach</h2>
            <p className="text-sm text-gray-400">
              Interactive sandboxes, AI-powered tutors, clear visuals, and real-world examples
              instead of dry theory and buzzwords.
            </p>
          </motion.div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Journey</h2>
            <p className="text-sm text-gray-400">
              BlockStudy was born from a simple frustration: blockchain felt powerful but
              unnecessarily confusing. We set out to build a learning experience that feels more
              like exploring a sci‑fi world than reading a dense whitepaper.
            </p>
            <p className="text-sm text-gray-400">
              Today, learners use BlockStudy to understand how blockchains actually work, what
              problems they solve, and how to build projects that matter—without needing a PhD in
              cryptography.
            </p>
          </div>
          <div className="rounded-2xl border border-neon-blue/40 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/20 p-6">
            <h3 className="text-sm font-semibold text-gray-200 mb-4 uppercase tracking-[0.18em]">
              BY THE NUMBERS
            </h3>
            <dl className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-gray-400">Learners</dt>
                <dd className="text-2xl font-bold text-neon-blue">5,000+</dd>
              </div>
              <div>
                <dt className="text-gray-400">Countries</dt>
                <dd className="text-2xl font-bold text-neon-purple">50+</dd>
              </div>
              <div>
                <dt className="text-gray-400">Interactive labs</dt>
                <dd className="text-2xl font-bold text-neon-green">20+</dd>
              </div>
              <div>
                <dt className="text-gray-400">Average rating</dt>
                <dd className="text-2xl font-bold text-neon-blue">4.8/5</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="border border-white/10 rounded-2xl p-8 bg-[#050510]/60">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Join our mission</h2>
              <p className="text-sm text-gray-400 max-w-xl">
                Whether you&apos;re skilling up for a new role, exploring web3, or teaching others,
                BlockStudy gives you the tools to learn—and to help others learn with you.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/tutorials"
                className="px-6 py-3 rounded-lg bg-neon-blue text-black text-sm font-semibold hover:bg-neon-blue/90 transition-colors"
              >
                Start learning
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-lg border border-white/20 text-sm font-semibold hover:border-neon-blue hover:text-neon-blue transition-colors"
              >
                Talk to us
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}


