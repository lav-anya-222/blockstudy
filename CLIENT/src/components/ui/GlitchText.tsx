"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={glitch ? {
        x: [0, -2, 2, -2, 2, 0],
        textShadow: [
          '0 0 10px rgba(59, 130, 246, 0.5)',
          '2px 0 0 rgba(236, 72, 153, 1), -2px 0 0 rgba(59, 130, 246, 1)',
          '-2px 0 0 rgba(236, 72, 153, 1), 2px 0 0 rgba(59, 130, 246, 1)',
          '0 0 10px rgba(59, 130, 246, 0.5)',
        ],
      } : {}}
      transition={{ duration: 0.2 }}
    >
      {text}
      {/* Glitch overlay layers */}
      <span
        className={`absolute inset-0 ${glitch ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
          textShadow: '2px 0 0 rgba(236, 72, 153, 1)',
          transform: 'translate(2px, 0)',
        }}
      >
        {text}
      </span>
      <span
        className={`absolute inset-0 ${glitch ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
        style={{
          clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
          textShadow: '-2px 0 0 rgba(59, 130, 246, 1)',
          transform: 'translate(-2px, 0)',
        }}
      >
        {text}
      </span>
    </motion.span>
  );
};

