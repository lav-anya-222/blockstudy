"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils/utils";

interface NeonCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'pink' | 'teal' | 'green';
  borderWidth?: 'thin' | 'medium' | 'thick';
}

const glowColors = {
  blue: 'shadow-[0_0_20px_rgba(59,130,246,0.5)] border-blue-500/50',
  purple: 'shadow-[0_0_20px_rgba(139,92,246,0.5)] border-purple-500/50',
  pink: 'shadow-[0_0_20px_rgba(236,72,153,0.5)] border-pink-500/50',
  teal: 'shadow-[0_0_20px_rgba(45,212,191,0.5)] border-teal-500/50',
  green: 'shadow-[0_0_20px_rgba(16,185,129,0.5)] border-green-500/50',
};

const borderWidths = {
  thin: 'border',
  medium: 'border-2',
  thick: 'border-[3px]',
};

export const NeonCard: React.FC<NeonCardProps> = ({
  children,
  className,
  glowColor = 'blue',
  borderWidth = 'thin',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.02,
        boxShadow: [
          `0 0 20px rgba(${glowColor === 'blue' ? '59,130,246' : glowColor === 'purple' ? '139,92,246' : glowColor === 'pink' ? '236,72,153' : glowColor === 'teal' ? '45,212,191' : '16,185,129'}, 0.5)`,
          `0 0 40px rgba(${glowColor === 'blue' ? '59,130,246' : glowColor === 'purple' ? '139,92,246' : glowColor === 'pink' ? '236,72,153' : glowColor === 'teal' ? '45,212,191' : '16,185,129'}, 0.8)`,
          `0 0 20px rgba(${glowColor === 'blue' ? '59,130,246' : glowColor === 'purple' ? '139,92,246' : glowColor === 'pink' ? '236,72,153' : glowColor === 'teal' ? '45,212,191' : '16,185,129'}, 0.5)`,
        ],
      }}
      className={cn(
        "rounded-2xl p-6 bg-[#0a0a0a]/80 backdrop-blur-sm",
        borderWidths[borderWidth],
        glowColors[glowColor],
        "transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

