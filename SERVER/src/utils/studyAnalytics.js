/**
 * Study analytics utilities
 * Calculates study statistics and insights
 */

exports.calculateTotalStudyTime = (sessions) => {
  return sessions.reduce((total, session) => total + (session.duration || 0), 0);
};

exports.calculateAverageStudyTime = (sessions, days) => {
  const totalTime = exports.calculateTotalStudyTime(sessions);
  return days > 0 ? totalTime / days : 0;
};

exports.calculateStudyStreak = (sessions) => {
  if (sessions.length === 0) return 0;

  const sortedSessions = [...sessions].sort(
    (a, b) => new Date(b.startTime) - new Date(a.startTime)
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
};

exports.getStudyTimeBySubject = (sessions) => {
  const subjectTime = {};

  sessions.forEach(session => {
    if (!subjectTime[session.subject]) {
      subjectTime[session.subject] = 0;
    }
    subjectTime[session.subject] += session.duration || 0;
  });

  return subjectTime;
};

