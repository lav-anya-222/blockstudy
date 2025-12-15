"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { motion } from "framer-motion";

const categories = ["Basics", "Smart Contracts", "DeFi", "NFTs", "Tutorials"];

const articles = [
  {
    slug: "blockchain-basics",
    title: "Blockchain Basics: Blocks, Chains, and Why They Matter",
    category: "Basics",
    readTime: "8 min read",
    excerpt:
      "A clear, jargon-free introduction to how blockchains store data, reach consensus, and stay secure.",
  },
  {
    slug: "smart-contracts-101",
    title: "Smart Contracts 101: Code that Runs on the Blockchain",
    category: "Smart Contracts",
    readTime: "10 min read",
    excerpt:
      "Discover how smart contracts turn agreements into executable code—and what that unlocks for builders.",
  },
  {
    slug: "build-your-first-dapp",
    title: "Build Your First DApp: From Idea to Deployed App",
    category: "Tutorials",
    readTime: "15 min read",
    excerpt:
      "Follow a guided path to connect a simple frontend to a smart contract and ship something real.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-10 text-center"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-gray-400 mb-3">
            RESOURCES
          </p>
          <h1 className="text-4xl font-bold mb-4">Blockchain Learning Hub</h1>
          <p className="text-gray-400 text-lg">
            Articles, explainers, and guided tutorials to help you go from &quot;What is a block?&quot;
            to shipping real web3 projects.
          </p>
        </motion.section>

        <section className="mb-10 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className="px-3 py-1 rounded-full border border-white/15 text-xs text-gray-300 hover:border-neon-blue hover:text-neon-blue transition-colors"
            >
              {cat}
            </button>
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-[2fr,1.2fr] gap-10">
          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-white/12 bg-[#0a0a15] p-6 hover:border-neon-blue/60 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all cursor-pointer"
              >
                <p className="text-xs text-neon-blue mb-1 uppercase tracking-[0.18em]">
                  {article.category}
                </p>
                <h2 className="text-xl font-semibold mb-1">{article.title}</h2>
                <p className="text-xs text-gray-500 mb-3">{article.readTime}</p>
                <p className="text-sm text-gray-300 mb-4">{article.excerpt}</p>
                <a
                  href="#"
                  className="text-xs font-semibold text-neon-blue uppercase tracking-[0.18em]"
                >
                  Read article
                </a>
              </motion.article>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#050510] p-5">
              <h3 className="text-sm font-semibold mb-2">Most popular</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Why decentralization changes trust</li>
                <li>• Gas fees explained in plain English</li>
                <li>• How NFTs work beyond profile pictures</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neon-blue/30 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/20 p-5">
              <h3 className="text-sm font-semibold mb-2">Never miss a new lesson</h3>
              <p className="text-sm text-gray-200 mb-3">
                Subscribe to get new articles, labs, and challenges in your inbox.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
                <input
                  type="email"
                  placeholder="you@web3.dev"
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-blue"
                />
                <button
                  type="submit"
                  className="w-full px-3 py-2 rounded-lg bg-neon-blue text-black text-xs font-semibold hover:bg-neon-blue/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </section>
      </div>

      <Footer />
    </main>
  );
}


