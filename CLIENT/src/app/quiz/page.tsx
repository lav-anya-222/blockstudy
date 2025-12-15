"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What makes a blockchain hard to tamper with?",
    options: [
      "It is stored on a single central server",
      "Blocks are chained together with cryptographic hashes",
      "It uses very fast internet connections",
      "It is backed by a government",
    ],
    correctIndex: 1,
  },
  {
    id: 2,
    question: "What is a smart contract?",
    options: [
      "A legally binding paper agreement",
      "An AI that negotiates deals",
      "Code that runs on a blockchain when conditions are met",
      "A contract that cannot be changed",
    ],
    correctIndex: 2,
  },
  {
    id: 3,
    question: "Which best describes a decentralized network?",
    options: [
      "All decisions are made by one central authority",
      "Power and data are distributed across many nodes",
      "Only offline nodes can participate",
      "Users must share the same password",
    ],
    correctIndex: 1,
  },
];

export default function QuizPage() {
  const [answers, setAnswers] = useState<Record<number, number | null>>(
    Object.fromEntries(questions.map((q) => [q.id, null]))
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qid: number, index: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qid]: index }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = questions.reduce((acc, q) => {
    const a = answers[q.id];
    return acc + (a === q.correctIndex ? 1 : 0);
  }, 0);

  const percent = Math.round((score / questions.length) * 100);

  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-gray-400 mb-3">
            QUIZ
          </p>
          <h1 className="text-4xl font-bold mb-3">Blockchain Basics Quiz</h1>
          <p className="text-gray-400 text-lg">
            Test what you&apos;ve learned. Pick the best answer for each question.
          </p>
        </motion.div>

        <div className="space-y-6 mb-8">
          {questions.map((q, idx) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl border border-white/10 bg-[#050510]/80 p-5"
            >
              <p className="text-sm font-semibold mb-3">
                Q{idx + 1}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, i) => {
                  const selected = answers[q.id] === i;
                  const correct = submitted && i === q.correctIndex;
                  const incorrect = submitted && selected && i !== q.correctIndex;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleSelect(q.id, i)}
                      className={`w-full text-left px-3 py-2 rounded-lg border text-sm transition-colors ${
                        correct
                          ? "border-emerald-400 bg-emerald-500/10 text-emerald-100"
                          : incorrect
                          ? "border-red-400 bg-red-500/10 text-red-100"
                          : selected
                          ? "border-neon-blue bg-neon-blue/10 text-neon-blue"
                          : "border-white/15 text-gray-200 hover:border-neon-blue/60 hover:bg-neon-blue/5"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-3 rounded-lg bg-neon-blue text-black text-sm font-semibold hover:bg-neon-blue/90 transition-colors"
          >
            {submitted ? "Retake (change answers)" : "Submit answers"}
          </button>
          {submitted && (
            <div className="text-sm text-gray-200">
              Score:{" "}
              <span className="font-semibold text-neon-blue">
                {score}/{questions.length} ({percent}%)
              </span>
            </div>
          )}
        </div>

        {submitted && (
          <div className="rounded-2xl border border-white/12 bg-black/50 p-4 text-sm text-gray-200">
            <p className="mb-2">
              Nice work! Want to improve this score? Revisit{" "}
              <a href="/tutorials" className="text-neon-blue underline">
                Tutorials
              </a>{" "}
              or ask the{" "}
              <a href="/ai-tutor" className="text-neon-blue underline">
                AI Tutor
              </a>{" "}
              to explain any concepts you&apos;re unsure about.
            </p>
            <p className="text-xs text-gray-500">
              You can share your result: &quot;I scored {percent}% on the BlockStudy blockchain basics
              quiz!&quot;
            </p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}


