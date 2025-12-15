"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need prior blockchain or crypto experience to start?",
    answer:
      "No. BlockStudy was designed so complete beginners can get comfortable with the core ideas before touching code or real crypto. We start with mental models, visuals, and analogies—then move into hands-on labs.",
  },
  {
    question: "Are the courses self‑paced?",
    answer:
      "Yes. You can start anytime, pause when you need to, and come back to your learning path later. Your progress is stored on your device, and account features can unlock cloud sync in the future.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Selected learning paths include completion certificates you can download and share. We focus on certificates that reflect real skills, not just time spent watching videos.",
  },
  {
    question: "Does BlockStudy give financial or investment advice?",
    answer:
      "No. BlockStudy is an education platform. We explain how the technology works and help you think critically about use‑cases, but we do not provide financial, legal, or investment advice.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-gray-400 mb-3">
            HELP CENTER
          </p>
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400 text-lg">
            Answers to the most common questions about learning blockchain with BlockStudy.
          </p>
        </motion.section>

        <section className="space-y-3">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div
                key={item.question}
                className="border border-white/12 rounded-xl bg-[#0a0a15] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
                >
                  <span className="text-sm font-semibold text-gray-100">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 pb-4"
                    >
                      <p className="text-sm text-gray-300">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </section>

        <section className="mt-10 rounded-2xl border border-neon-blue/30 bg-gradient-to-r from-neon-blue/10 via-transparent to-neon-purple/20 p-6 text-center">
          <h2 className="text-lg font-semibold mb-2">Still have questions?</h2>
          <p className="text-sm text-gray-200 mb-3">
            If you don&apos;t see your question here, send us a quick message and we&apos;ll be happy to
            help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-neon-blue text-black text-sm font-semibold hover:bg-neon-blue/90 transition-colors"
          >
            Contact support
          </a>
        </section>
      </div>

      <Footer />
    </main>
  );
}


