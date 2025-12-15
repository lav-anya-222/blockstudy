"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya",
    role: "Full-stack Developer",
    quote: "BlockStudy finally made blockchain click for me. The visuals and sandboxes feel like learning in a sci‑fi lab.",
  },
  {
    name: "Raj",
    role: "Business Owner",
    quote: "I went from buzzword confusion to understanding how crypto and smart contracts can help my business.",
  },
  {
    name: "Amir",
    role: "Computer Science Student",
    quote: "The AI tutor and interactive demos are unlike any other course I’ve tried. It feels built for how I actually learn.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 relative border-t border-white/10 bg-[#050510]">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-2">
              SOCIAL PROOF
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Learners who{" "}
              <span className="text-neon-blue">unlocked blockchain</span> with BlockStudy
            </h2>
          </div>
          <div className="text-sm text-gray-400">
            <p>Trusted by over 5,000 learners in 50+ countries.</p>
            <p className="mt-1">
              <span className="font-semibold text-neon-green">4.8/5</span> average satisfaction score.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/12 bg-[#050510]/80 p-6 backdrop-blur-md"
            >
              <p className="text-sm text-gray-200 mb-4">“{t.quote}”</p>
              <figcaption className="text-xs text-gray-400">
                <span className="font-semibold text-white">{t.name}</span> · {t.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/12 bg-black/50 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-1">
              AS SEEN IN
            </p>
            <p className="text-sm text-gray-300">
              TechNews · CryptoWeekly · Web3 Journal <span className="text-gray-500 text-xs">(concept examples)</span>
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-2 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="Get weekly blockchain insights"
              className="flex-1 px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-blue"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-neon-blue text-black text-xs font-semibold hover:bg-neon-blue/90 transition-colors"
            >
              Join newsletter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


