"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10 bg-[#050510] relative z-10">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand + trust */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              BLOCK<span className="text-neon-blue">STUDY</span>
            </h3>
            <p className="text-sm text-gray-400">
              Demystifying blockchain with immersive, hands-on learning paths for the next generation of builders.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">✅ 5,000+ learners</span>
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">⭐ 4.8/5 average rating</span>
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">🏆 Industry-inspired content</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-3 uppercase tracking-[0.18em]">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-neon-blue transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="hover:text-neon-blue transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-neon-blue transition-colors">
                  Blog & resources
                </Link>
              </li>
              <li>
                <Link href="/sandbox" className="hover:text-neon-blue transition-colors">
                  Blockchain sandbox
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-3 uppercase tracking-[0.18em]">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/faq" className="hover:text-neon-blue transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-neon-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-neon-blue transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-neon-blue transition-colors">
                  Terms of use
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-3 uppercase tracking-[0.18em]">
              Stay in the loop
            </h4>
            <p className="text-sm text-gray-400 mb-3">
              Get bite-sized blockchain lessons, new tutorials, and challenges straight to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 mb-3"
            >
              <input
                type="email"
                placeholder="you@web3.dev"
                className="flex-1 px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-blue"
              />
              <button
                type="submit"
                className="px-3 py-2 rounded-lg bg-neon-blue text-black text-xs font-semibold hover:bg-neon-blue/90 transition-colors"
              >
                Join
              </button>
            </form>
            <div className="flex items-center gap-3 text-gray-400">
              <a
                href="#"
                aria-label="BlockStudy on Twitter"
                className="p-1.5 rounded-full border border-white/15 hover:border-neon-blue hover:text-neon-blue transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="BlockStudy on LinkedIn"
                className="p-1.5 rounded-full border border-white/15 hover:border-neon-blue hover:text-neon-blue transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="BlockStudy on GitHub"
                className="p-1.5 rounded-full border border-white/15 hover:border-neon-blue hover:text-neon-blue transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {year} BlockStudy. All rights reserved.</p>
          <p>Built for learners who want to understand the chain behind the hype.</p>
        </div>
      </div>
    </footer>
  );
};


