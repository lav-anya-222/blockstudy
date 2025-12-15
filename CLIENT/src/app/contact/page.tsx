"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-gray-400 mb-3">
            CONTACT
          </p>
          <h1 className="text-4xl font-bold mb-4">Let&apos;s talk about your learning journey</h1>
          <p className="text-gray-400 text-lg">
            Questions about content, partnerships, or using BlockStudy in your classroom? Send us a
            message and we&apos;ll get back within 24 hours.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="rounded-2xl bg-[#0a0a15] border border-white/10 p-5 space-y-2">
            <Mail className="w-5 h-5 text-neon-blue" />
            <h2 className="text-sm font-semibold">Email</h2>
            <p className="text-sm text-gray-400">support@blockstudy.io</p>
          </div>
          <div className="rounded-2xl bg-[#0a0a15] border border-white/10 p-5 space-y-2">
            <Phone className="w-5 h-5 text-neon-blue" />
            <h2 className="text-sm font-semibold">Phone</h2>
            <p className="text-sm text-gray-400">+1 (555) 0123‑456</p>
          </div>
          <div className="rounded-2xl bg-[#0a0a15] border border-white/10 p-5 space-y-2">
            <MapPin className="w-5 h-5 text-neon-blue" />
            <h2 className="text-sm font-semibold">Location</h2>
            <p className="text-sm text-gray-400">Remote‑first, serving learners worldwide.</p>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-[2fr,1.3fr] gap-10">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-[#050510]/60 p-6 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-blue"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-blue"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Topic
              </label>
              <select
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-sm text-white focus:outline-none focus:border-neon-blue"
              >
                <option>General question</option>
                <option>Learning path / curriculum</option>
                <option>Partnership or institution</option>
                <option>Bug report or feedback</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                required
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-blue resize-none"
                placeholder="Tell us how we can help…"
              />
            </div>
            <p className="text-[11px] text-gray-500">
              By submitting, you agree that we may contact you about BlockStudy content and updates.
            </p>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-neon-blue text-black text-sm font-semibold hover:bg-neon-blue/90 transition-colors"
            >
              Send message
            </button>
          </form>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 p-5 bg-[#050510]">
              <h2 className="text-sm font-semibold mb-2">Quick answers</h2>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Courses are self‑paced and accessible 24/7.</li>
                <li>• You don&apos;t need prior crypto knowledge to get started.</li>
                <li>• Certificates are issued for selected learning paths.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neon-blue/30 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/20 p-5">
              <h2 className="text-sm font-semibold mb-2">Response time</h2>
              <p className="text-sm text-gray-200">
                We usually reply within <span className="font-semibold text-neon-blue">24 hours</span> on weekdays.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}


