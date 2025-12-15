/**
 * API service for StudySphere
 * Handles all HTTP requests to the backend
 */

import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),
  register: (userData: { email: string; password: string; username: string }) =>
    apiClient.post('/auth/register', userData),
  logout: () => apiClient.post('/auth/logout'),
  getCurrentUser: () => apiClient.get('/auth/me'),
};

// Study API
export const studyAPI = {
  getSessions: () => apiClient.get('/study/sessions'),
  createSession: (sessionData: any) => apiClient.post('/study/session', sessionData),
  updateSession: (id: string, sessionData: any) =>
    apiClient.put(`/study/session/${id}`, sessionData),
  deleteSession: (id: string) => apiClient.delete(`/study/session/${id}`),
};

// Flashcard API
export const flashcardAPI = {
  getFlashcards: () => apiClient.get('/flashcards'),
  createFlashcard: (flashcardData: any) =>
    apiClient.post('/flashcards', flashcardData),
  updateFlashcard: (id: string, flashcardData: any) =>
    apiClient.put(`/flashcards/${id}`, flashcardData),
  deleteFlashcard: (id: string) => apiClient.delete(`/flashcards/${id}`),
};

// AI API
export const aiAPI = {
  generatePlan: (data: { subject: string; duration: number; goals: string[] }) =>
    apiClient.post('/ai/generate-plan', data),
  chat: (message: string) => apiClient.post('/ai/chat', { message }),
};

// Room API
export const roomAPI = {
  getRooms: () => apiClient.get('/rooms'),
  createRoom: (roomData: any) => apiClient.post('/rooms', roomData),
  joinRoom: (roomId: string) => apiClient.post(`/rooms/${roomId}/join`),
  leaveRoom: (roomId: string) => apiClient.post(`/rooms/${roomId}/leave`),
};

export default apiClient;

