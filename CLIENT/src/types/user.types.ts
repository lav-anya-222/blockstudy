/**
 * User type definitions
 */

export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends User {
  learningPlanets: LearningPlanet[];
  achievements: Achievement[];
  studyTime: number; // in minutes
  streak: number;
  level: number;
  xp: number;
}

export interface LearningPlanet {
  id: string;
  subject: string;
  progress: number; // 0-100
  createdAt: Date;
  color?: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'auto';
  notifications: boolean;
  soundEnabled: boolean;
  language: string;
}

