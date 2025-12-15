"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

interface CyberStatsCardProps {
  icon?: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  borderColor: 'teal' | 'magenta' | 'blue' | 'purple';
  delay?: number;
}

const borderColors = {
  teal: 'border-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.5)]',
  magenta: 'border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.5)]',
  blue: 'border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]',
  purple: 'border-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.5)]',
};

export const CyberStatsCard: React.FC<CyberStatsCardProps> = ({
  icon: Icon,
  value,
  suffix = '',
  label,
  borderColor,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="relative"
    >
      {/* Circular neon-bordered card like MYSTICMINDS */}
      <div className={`
        w-48 h-48 md:w-56 md:h-56 rounded-full
        border-2 ${borderColors[borderColor]}
        bg-[#0a0a0a]/90 backdrop-blur-sm
        flex flex-col items-center justify-center
        relative overflow-hidden
        transition-all duration-300
      `}>
        {/* Animated glow pulse */}
        <motion.div
          className={`absolute inset-0 rounded-full ${borderColors[borderColor]}`}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Icon (if provided) */}
        {Icon && (
          <div className="absolute top-4">
            <Icon size={24} className={`text-${borderColor === 'teal' ? 'teal' : borderColor === 'magenta' ? 'pink' : borderColor}-400`} />
          </div>
        )}

        {/* Value */}
        <div className="text-3xl md:text-4xl font-bold text-white mb-2 z-10">
          <AnimatedCounter value={value} suffix={suffix} />
        </div>

        {/* Label */}
        <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider z-10 text-center px-4 leading-tight">
          {label}
        </div>

        {/* Scan line effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
          animate={{
            y: ['-100%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ height: '2px' }}
        />
      </div>
    </motion.div>
  );
};

