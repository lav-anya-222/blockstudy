"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, User, Lock, Mail, Sparkles, Target } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const SoloLevelingRegister: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    learningGoal: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const learningGoals = [
    'Academic Excellence',
    'Skill Development',
    'Exam Preparation',
    'Career Advancement',
    'Just Exploring',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate registration
    setTimeout(() => {
      // Store user data
      localStorage.setItem('userData', JSON.stringify({
        name: formData.name,
        email: formData.email,
        level: 1,
        xp: 0,
        avatar: 'explorer',
        learningGoal: formData.learningGoal,
        createdAt: new Date().toISOString(),
      }));

      setIsLoading(false);
      // Redirect to login
      router.push('/login');
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0a0a] flex items-center justify-center p-4">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Registration Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Glowing border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur opacity-75 animate-pulse" />

        <div className="relative bg-[#0a0a0a]/95 backdrop-blur-xl border-2 border-purple-500/50 rounded-2xl p-8 shadow-[0_0_40px_rgba(139,92,246,0.5)]">
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-purple-400 mb-2 uppercase tracking-wider">
              <span>Register</span>
              <span>Verify</span>
              <span>Dashboard</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-1">
              <motion.div
                initial={{ width: '33%' }}
                animate={{ width: isLoading ? '66%' : '33%' }}
                className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              />
            </div>
          </div>

          {/* Avatar silhouette circle */}
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full border-4 border-purple-500/50 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                <User className="w-12 h-12 text-purple-400" />
              </div>
              <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl animate-pulse" />
            </motion.div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            CREATE YOUR PROFILE
          </h1>
          <p className="text-center text-gray-400 text-sm mb-8 uppercase tracking-wider">
            Join the Knowledge Universe
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Input */}
            <div>
              <label className="block text-purple-400 text-sm mb-2 uppercase tracking-wider">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border-2 border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-purple-400 text-sm mb-2 uppercase tracking-wider">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border-2 border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-purple-400 text-sm mb-2 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="w-full pl-12 pr-12 py-3 bg-[#0a0a0a] border-2 border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="Create password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-purple-400 text-sm mb-2 uppercase tracking-wider">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                  className="w-full pl-12 pr-12 py-3 bg-[#0a0a0a] border-2 border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="Confirm password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Learning Goal Dropdown */}
            <div>
              <label className="block text-purple-400 text-sm mb-2 uppercase tracking-wider">
                Learning Goal <span className="text-gray-500 normal-case">(Optional)</span>
              </label>
              <div className="relative">
                <Target className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400 z-10" />
                <select
                  value={formData.learningGoal}
                  onChange={(e) => setFormData({ ...formData, learningGoal: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border-2 border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0a0a0a]">Select your goal</option>
                  {learningGoals.map((goal) => (
                    <option key={goal} value={goal} className="bg-[#0a0a0a]">
                      {goal}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Register Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.05 }}
              whileTap={{ scale: isLoading ? 1 : 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] transition-all uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                  Creating your knowledge universe...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Begin Your Journey
                </>
              )}
            </motion.button>
          </form>

          {/* Login Link */}
          <p className="text-center mt-6 text-gray-400 text-sm">
            Already a Hunter?{' '}
            <Link href="/login" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
              Login Now
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

