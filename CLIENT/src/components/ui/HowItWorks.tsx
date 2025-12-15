"use client";

import { motion } from 'framer-motion';
import { Upload, Sparkles, TrendingUp, ArrowDown } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload/Sync Materials',
    description: 'Import your study materials from Google Drive, Notion, or upload directly. Our AI organizes everything automatically.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Sparkles,
    title: 'AI Creates Study Plan',
    description: 'Get a personalized study plan tailored to your goals, schedule, and learning style. AI adapts as you progress.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'Learn & Track Progress',
    description: 'Study with interactive tools, track your progress in 3D, and unlock achievements as you master new concepts.',
    color: 'from-green-500 to-teal-500',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 px-4 relative bg-[#0a0a0a]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Your Learning Journey with Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get started in three simple steps and transform your learning experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting lines (hidden on mobile) */}
          <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-30" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold shadow-lg border-2 border-white/20`}>
                    {index + 1}
                  </div>
                </div>

                {/* Cyberpunk-style card */}
                <div className="text-center pt-8 h-full hover:scale-105 transition-transform duration-300 rounded-2xl border-2 border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm p-6 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  {/* Animated icon */}
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg border-2 border-white/20`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={40} className="text-white drop-shadow-[0_0_8px_currentColor]" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                {/* Arrow between steps (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 -right-4 z-10">
                    <ArrowDown className="text-purple-400 w-6 h-6 animate-bounce drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

