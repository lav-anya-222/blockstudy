/**
 * Study calculation utilities
 * Handles study time, progress, and analytics calculations
 */

export interface StudySession {
  duration: number; // in minutes
  startTime: Date;
  endTime: Date;
  subject: string;
  focusScore?: number;
}

/**
 * Calculate total study time from sessions
 */
export function calculateTotalStudyTime(sessions: StudySession[]): number {
  return sessions.reduce((total, session) => total + session.duration, 0);
}

/**
 * Calculate average study time per day
 */
export function calculateAverageStudyTime(sessions: StudySession[], days: number): number {
  const totalTime = calculateTotalStudyTime(sessions);
  return days > 0 ? totalTime / days : 0;
}

/**
 * Calculate study streak (consecutive days)
 */
export function calculateStudyStreak(sessions: StudySession[]): number {
  if (sessions.length === 0) return 0;

  const sortedSessions = [...sessions].sort(
    (a, b) => b.startTime.getTime() - a.startTime.getTime()
  );

  let streak = 0;
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  for (const session of sortedSessions) {
    const sessionDate = new Date(session.startTime);
    sessionDate.setHours(0, 0, 0, 0);

    const daysDiff = Math.floor(
      (currentDate.getTime() - sessionDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysDiff === streak) {
      streak++;
      currentDate = sessionDate;
    } else if (daysDiff > streak) {
      break;
    }
  }

  return streak;
}

/**
 * Calculate progress percentage
 */
export function calculateProgress(completed: number, total: number): number {
  if (total === 0) return 0;
  return Math.min(Math.round((completed / total) * 100), 100);
}

/**
 * Calculate focus score average
 */
export function calculateAverageFocusScore(sessions: StudySession[]): number {
  const sessionsWithScore = sessions.filter(s => s.focusScore !== undefined);
  if (sessionsWithScore.length === 0) return 0;

  const sum = sessionsWithScore.reduce(
    (total, session) => total + (session.focusScore || 0),
    0
  );
  return Math.round(sum / sessionsWithScore.length);
}

/**
 * Get study time by subject
 */
export function getStudyTimeBySubject(sessions: StudySession[]): Record<string, number> {
  const subjectTime: Record<string, number> = {};

  sessions.forEach(session => {
    if (!subjectTime[session.subject]) {
      subjectTime[session.subject] = 0;
    }
    subjectTime[session.subject] += session.duration;
  });

  return subjectTime;
}

