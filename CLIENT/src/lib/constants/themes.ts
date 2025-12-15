/**
 * Theme constants for StudySphere
 * Defines color schemes and theme configurations
 */

export const lightTheme = {
  name: 'light',
  colors: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#2dd4bf',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    background: '#ffffff',
    surface: '#f9fafb',
    text: '#111827',
    textSecondary: '#6b7280',
    border: '#e5e7eb',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    success: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    accent: 'linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%)',
  },
};

export const darkTheme = {
  name: 'dark',
  colors: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#2dd4bf',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    background: '#0a0a0a',
    surface: '#1a1a1a',
    text: '#ffffff',
    textSecondary: '#9ca3af',
    border: '#374151',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    success: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    accent: 'linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%)',
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type ThemeName = keyof typeof themes;

