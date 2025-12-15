"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils/utils';

interface FloatingActionButtonProps {
  onClick: () => void;
  icon?: React.ReactNode;
  label?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  className?: string;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onClick,
  icon,
  label,
  position = 'bottom-right',
  className,
}) => {
  const positions = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6',
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={cn(
        'fixed z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600',
        'text-white shadow-lg hover:shadow-xl',
        'flex items-center justify-center',
        'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2',
        positions[position],
        className
      )}
      aria-label={label || 'Add'}
    >
      {icon || <Plus className="w-6 h-6" />}
    </motion.button>
  );
};

