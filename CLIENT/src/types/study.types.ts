/**
 * Study-related type definitions
 */

export interface StudySession {
  id: string;
  userId: string;
  subject: string;
  duration: number; // in minutes
  startTime: Date;
  endTime: Date;
  resources?: string[];
  notes?: string;
  focusScore?: number; // 0-100
  createdAt: Date;
}

export interface Flashcard {
  id: string;
  userId: string;
  subject: string;
  front: string;
  back: string;
  difficulty: 'easy' | 'medium' | 'hard';
  lastReviewed?: Date;
  nextReview?: Date;
  reviewCount: number;
  masteryLevel: number; // 0-100
  createdAt: Date;
}

export interface StudyRoom {
  id: string;
  name: string;
  description?: string;
  subject: string;
  createdBy: string;
  participants: string[];
  maxParticipants: number;
  isPrivate: boolean;
  createdAt: Date;
}

export interface LearningPath {
  id: string;
  userId: string;
  subject: string;
  name: string;
  description?: string;
  modules: LearningModule[];
  progress: number; // 0-100
  estimatedDuration: number; // in minutes
  createdAt: Date;
}

export interface LearningModule {
  id: string;
  name: string;
  description?: string;
  order: number;
  completed: boolean;
  resources: string[];
  estimatedTime: number; // in minutes
}

