"use client";

import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Award, Zap, Heart, Brain, Target, Flame } from 'lucide-react';
import { SkillRadar } from './SkillRadar';
import { ProgressRing } from '@/components/ui/ProgressRing';

export const ProfileDashboard: React.FC = () => {
  const skills = [
    { label: 'LEARNING', value: 85, color: '#a78bfa' },
    { label: 'CREATIVITY', value: 72, color: '#ec4899' },
    { label: 'WRITING', value: 68, color: '#3b82f6' },
    { label: 'CODING', value: 90, color: '#10b981' },
  ];

  const calendarDays = [
    [5, 9, 8, 4, 1],
    [1, 2, 3, 5, 6],
    [24, 22, 24, 10, 13],
  ];

  const completedDays = [1, 2, 24];

  // Get user data from localStorage
  const getUserData = () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('userData');
      if (stored) {
        return JSON.parse(stored);
      }
    }
    return {
      name: 'Hunter',
      level: 11,
      xp: 720,
      avatar: 'H',
    };
  };

  const userData = getUserData();

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 md:p-6">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-500/20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
            M
          </div>
          <span className="text-white font-bold text-lg">STUDYSPHERE</span>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden md:flex items-center gap-2">
          {['Dashboard', 'Galaxy', 'Rooms', 'Library'].map((item) => (
            <button
              key={item}
              className="px-3 py-1.5 text-xs text-gray-400 hover:text-purple-400 border border-purple-500/30 hover:border-purple-500/50 rounded transition-all uppercase tracking-wider"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Main Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
          SOLO LEVELING SYSTEM
        </h1>
        <div className="text-sm text-gray-400 uppercase tracking-wider">
          HABIT TRACKER
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Character Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0a0a0a]/80 border-2 border-purple-500/50 rounded-2xl p-6 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          >
            <div className="flex items-center gap-6 mb-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-purple-500/50 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-bold text-white">{userData.avatar || 'H'}</span>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl animate-pulse" />
              </div>

              {/* Level Info */}
              <div className="flex-1">
                <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Hunter Rank</div>
                <div className="text-xl md:text-2xl font-bold text-purple-400 mb-2">Level {userData.level || 11}P</div>
                <div className="w-full bg-gray-800 rounded-full h-2 mb-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((userData.xp || 720) / 1000) * 100}%` }}
                    transition={{ duration: 1 }}
                    className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  />
                </div>
                <div className="text-xs text-gray-500">XP: {userData.xp || 720} / 1000</div>
              </div>
            </div>

            {/* Stat Bars */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Level</span>
                  <span className="text-purple-400">72%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="h-2 bg-purple-500 rounded-full" style={{ width: '72%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Learning</span>
                  <span className="text-pink-400">85%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="h-2 bg-pink-500 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skill Radar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#0a0a0a]/80 border-2 border-purple-500/50 rounded-2xl p-6 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          >
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Skill Radar</h3>
            <div className="flex justify-center">
              <SkillRadar skills={skills} size={250} />
            </div>
          </motion.div>
        </div>

        {/* Middle Column */}
        <div className="space-y-6">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#0a0a0a]/80 border-2 border-purple-500/50 rounded-2xl p-6 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">March W-09</h3>
              <Calendar className="w-5 h-5 text-purple-400" />
            </div>
            <div className="grid grid-cols-5 gap-2 text-xs">
              {['WS', 'T', 'W', 'T', 'F'].map((day, i) => (
                <div key={i} className="text-center text-gray-400 uppercase">{day}</div>
              ))}
            </div>
            {calendarDays.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-5 gap-2 mt-2">
                {row.map((day, dayIndex) => (
                  <motion.div
                    key={dayIndex}
                    whileHover={{ scale: 1.1 }}
                    className={`aspect-square rounded-lg flex items-center justify-center text-sm font-bold ${
                      completedDays.includes(day)
                        ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]'
                        : 'bg-gray-800 text-gray-400 border border-gray-700'
                    }`}
                  >
                    {day}
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Potion Mark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#0a0a0a]/80 border-2 border-purple-500/50 rounded-2xl p-6 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          >
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Potion Mark</h3>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {['C1', 'MU', 'Ci', 'SA'].map((label) => (
                <div key={label} className="text-center text-purple-400 font-bold">{label}</div>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {[44, 1, 1, 41].map((value, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded p-2 text-center text-white font-bold"
                >
                  {value}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Skill Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#0a0a0a]/80 border-2 border-purple-500/50 rounded-2xl p-6 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          >
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Skill Points</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Creativity</span>
                  <span className="text-purple-400">0/500</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="h-2 bg-purple-500 rounded-full" style={{ width: '0%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Creativity</span>
                  <span className="text-pink-400">450</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="h-2 bg-pink-500 rounded-full" style={{ width: '90%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Health</span>
                  <span className="text-green-400">500</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Goal Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#0a0a0a]/80 border-2 border-purple-500/50 rounded-2xl p-6 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          >
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-400" />
              Goal
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Current</span>
                  <span className="text-purple-400">40%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '40%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Overachievement</span>
                  <span className="text-pink-400">150%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div className="h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Potions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-[#0a0a0a]/80 border-2 border-purple-500/50 rounded-2xl p-6 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                Potions
              </h3>
              <span className="text-purple-400 font-bold">69%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '69%' }} />
            </div>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {['VE', 'WP', 'XIT', 'S/E'].map((label) => (
                <div key={label} className="text-center text-purple-400 font-bold">{label}</div>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {['✓', '01', '★', '44'].map((value, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded p-2 text-center text-white font-bold"
                >
                  {value}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

