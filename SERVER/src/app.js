/**
 * Express application setup
 * Main application configuration and middleware
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { errorHandler } = require('./middleware/errorHandler');

// Import routes
const authRoutes = require('./routes/auth.routes');
const studyRoutes = require('./routes/study.routes');
const aiRoutes = require('./routes/ai.routes');
const roomsRoutes = require('./routes/rooms.routes');

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/study', studyRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/rooms', roomsRoutes);
app.use('/api/flashcards', require('./routes/flashcards.routes'));

// Error handling middleware (must be last)
app.use(errorHandler);

module.exports = app;

