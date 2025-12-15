-- StudySphere Seed Data
-- Initial data for development and testing

-- Sample achievements
INSERT INTO achievements (name, description, icon, rarity) VALUES
('First Steps', 'Complete your first study session', '🎯', 'common'),
('Dedicated Learner', 'Study for 7 consecutive days', '🔥', 'rare'),
('Knowledge Seeker', 'Study for 100 hours total', '📚', 'epic'),
('Master Scholar', 'Complete 1000 study sessions', '👑', 'legendary'),
('Flashcard Master', 'Create 100 flashcards', '🎴', 'rare'),
('Social Butterfly', 'Join 10 study rooms', '👥', 'common'),
('Night Owl', 'Study after midnight', '🦉', 'common'),
('Early Bird', 'Study before 6 AM', '🐦', 'common'),
('Subject Specialist', 'Master 5 different subjects', '⭐', 'epic'),
('Perfect Focus', 'Achieve 100% focus score', '🎯', 'rare')
ON CONFLICT (name) DO NOTHING;

-- Note: User data should be created through the application registration process
-- This seed file is mainly for achievements and other static data

