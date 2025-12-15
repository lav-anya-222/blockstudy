/**
 * Shared TypeScript types
 * Types used across both client and server
 */

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
}

export interface StudySession {
  id: string;
  userId: string;
  subject: string;
  duration: number;
  startTime: Date;
  endTime: Date;
}

