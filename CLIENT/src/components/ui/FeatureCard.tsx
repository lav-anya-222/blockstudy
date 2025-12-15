"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'blue' | 'purple' | 'pink' | 'teal';
  delay?: number;
  onClick?: () => void;
}

const colorClasses = {
  blue: {
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
    glow: 'shadow-blue-500/20',
  },
  purple: {
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
    glow: 'shadow-purple-500/20',
  },
  pink: {
    iconBg: 'bg-pink-500/20',
    iconColor: 'text-pink-400',
    glow: 'shadow-pink-500/20',
  },
  teal: {
    iconBg: 'bg-teal-500/20',
    iconColor: 'text-teal-400',
    glow: 'shadow-teal-500/20',
  },
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
  delay = 0,
  onClick,
}) => {
  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="h-full cursor-pointer"
    >
      <div className="text-center h-full group relative overflow-hidden rounded-2xl border-2 border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm p-6 hover:border-opacity-50 transition-all duration-300">
        {/* Neon glow on hover */}
        <motion.div
          className={`absolute inset-0 rounded-2xl ${colors.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          animate={{}}
        />

        {/* Animated background gradient on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${colors.iconBg} blur-xl`} />

        {/* Icon with neon glow animation */}
        <motion.div
          className={`w-16 h-16 mx-auto mb-4 ${colors.iconBg} rounded-full flex items-center justify-center ${colors.iconColor} relative z-10 border-2 ${color === 'blue' ? 'border-blue-400/50' : color === 'purple' ? 'border-purple-400/50' : color === 'pink' ? 'border-pink-400/50' : 'border-teal-400/50'}`}
          whileHover={{
            rotate: 360,
            scale: 1.1,
          }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <Icon size={28} className="drop-shadow-[0_0_8px_currentColor]" />
        </motion.div>

        <h3 className="text-xl font-bold mb-2 relative z-10 text-white group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 relative z-10 group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
