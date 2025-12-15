/**
 * AI service for StudySphere
 * Handles AI-related functionality including chat and study plan generation
 */

import { aiAPI } from './api';

export interface StudyPlanRequest {
  subject: string;
  duration: number; // in days
  goals: string[];
  currentLevel?: string;
}

export interface StudyPlan {
  id: string;
  subject: string;
  duration: number;
  goals: string[];
  schedule: {
    day: number;
    topics: string[];
    activities: string[];
    estimatedTime: number;
  }[];
  resources: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

/**
 * Generate a personalized study plan
 */
export async function generateStudyPlan(request: StudyPlanRequest): Promise<StudyPlan> {
  try {
    const response = await aiAPI.generatePlan(request);
    return response.data;
  } catch (error) {
    console.error('Error generating study plan:', error);
    throw error;
  }
}

/**
 * Send a chat message to AI tutor
 */
export async function sendChatMessage(message: string): Promise<string> {
  try {
    const response = await aiAPI.chat(message);
    return response.data.response || response.data.message;
  } catch (error) {
    console.error('Error sending chat message:', error);
    throw error;
  }
}

/**
 * Format study plan for display
 */
export function formatStudyPlan(plan: StudyPlan): string {
  let formatted = `Study Plan for ${plan.subject}\n\n`;
  formatted += `Duration: ${plan.duration} days\n`;
  formatted += `Goals: ${plan.goals.join(', ')}\n\n`;
  
  plan.schedule.forEach((day, index) => {
    formatted += `Day ${day.day}:\n`;
    formatted += `  Topics: ${day.topics.join(', ')}\n`;
    formatted += `  Activities: ${day.activities.join(', ')}\n`;
    formatted += `  Estimated Time: ${day.estimatedTime} minutes\n\n`;
  });

  if (plan.resources.length > 0) {
    formatted += `Resources:\n${plan.resources.map(r => `- ${r}`).join('\n')}\n`;
  }

  return formatted;
}

