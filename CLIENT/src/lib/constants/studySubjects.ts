/**
 * Study subjects constants
 * Predefined list of subjects and their configurations
 */

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  category: 'academic' | 'professional' | 'language' | 'skill' | 'other';
}

export const studySubjects: Subject[] = [
  // Academic
  { id: 'mathematics', name: 'Mathematics', icon: '📐', color: '#3b82f6', category: 'academic' },
  { id: 'physics', name: 'Physics', icon: '⚛️', color: '#8b5cf6', category: 'academic' },
  { id: 'chemistry', name: 'Chemistry', icon: '🧪', color: '#10b981', category: 'academic' },
  { id: 'biology', name: 'Biology', icon: '🧬', color: '#2dd4bf', category: 'academic' },
  { id: 'computer-science', name: 'Computer Science', icon: '💻', color: '#f59e0b', category: 'academic' },
  { id: 'history', name: 'History', icon: '📜', color: '#ef4444', category: 'academic' },
  { id: 'literature', name: 'Literature', icon: '📚', color: '#ec4899', category: 'academic' },
  
  // Languages
  { id: 'english', name: 'English', icon: '🇬🇧', color: '#3b82f6', category: 'language' },
  { id: 'spanish', name: 'Spanish', icon: '🇪🇸', color: '#f59e0b', category: 'language' },
  { id: 'french', name: 'French', icon: '🇫🇷', color: '#8b5cf6', category: 'language' },
  { id: 'german', name: 'German', icon: '🇩🇪', color: '#10b981', category: 'language' },
  
  // Professional
  { id: 'programming', name: 'Programming', icon: '⌨️', color: '#10b981', category: 'professional' },
  { id: 'design', name: 'Design', icon: '🎨', color: '#ec4899', category: 'professional' },
  { id: 'business', name: 'Business', icon: '💼', color: '#3b82f6', category: 'professional' },
  { id: 'marketing', name: 'Marketing', icon: '📊', color: '#f59e0b', category: 'professional' },
  
  // Skills
  { id: 'music', name: 'Music', icon: '🎵', color: '#8b5cf6', category: 'skill' },
  { id: 'art', name: 'Art', icon: '🖼️', color: '#ec4899', category: 'skill' },
  { id: 'photography', name: 'Photography', icon: '📷', color: '#2dd4bf', category: 'skill' },
];

export const getSubjectById = (id: string): Subject | undefined => {
  return studySubjects.find(subject => subject.id === id);
};

export const getSubjectsByCategory = (category: Subject['category']): Subject[] => {
  return studySubjects.filter(subject => subject.category === category);
};

export const getSubjectColor = (subjectId: string): string => {
  const subject = getSubjectById(subjectId);
  return subject?.color || '#3b82f6';
};

