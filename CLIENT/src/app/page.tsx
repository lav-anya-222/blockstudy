"use client";

import { AnimatedParticles } from "@/components/3d/AnimatedParticles";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/ui/Hero";
import { Features } from "@/components/ui/Features";
import { Pricing } from "@/components/ui/Pricing";
import { BlockchainProcess } from "@/components/ui/BlockchainProcess";
import { LearningPath } from "@/components/ui/LearningPath";
import { LiveTicker } from "@/components/ui/LiveTicker";
import { Testimonials } from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#050510] text-white selection:bg-neon-blue selection:text-black">
      <AnimatedParticles />
      <Navbar />

      <LiveTicker />
      <Hero />
      <Features />
      <LearningPath />
      <Pricing />
      <Testimonials />
      <BlockchainProcess />
      <Footer />
    </main>
  );
}
