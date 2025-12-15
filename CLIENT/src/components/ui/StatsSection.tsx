"use client";

import { motion } from 'framer-motion';
import { Users, MessageSquare, Clock, Award } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { GlassCard } from './GlassCard';

const stats = [
  {
    icon: Users,
    value: 1247,
    suffix: '+',
    label: 'Students Studying Now',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MessageSquare,
    value: 5892,
    suffix: '+',
    label: 'Questions Answered Today',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    value: 15847,
    suffix: ' hours',
    label: 'Study Hours Logged',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Award,
    value: 92,
    suffix: '%',
    label: 'Success Rate',
    color: 'from-yellow-500 to-orange-500',
  },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Thousands of Successful Learners
          </h2>
          <p className="text-gray-400 text-lg">
            Real-time stats from our active community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <GlassCard className="text-center p-6">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

