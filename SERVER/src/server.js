/**
 * Server entry point
 * Starts the Express server
 */

require('dotenv').config();
const app = require('./app');
const { connectDatabase } = require('./config/database');
const { initializeSocket } = require('./services/socketService');

const PORT = process.env.PORT || 5000;

// Connect to database
connectDatabase()
  .then(() => {
    console.log('✅ Database connected');
    
    // Start HTTP server
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
    });

    // Initialize Socket.IO
    initializeSocket(server);
    console.log('✅ Socket.IO initialized');
  })
  .catch((error) => {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  });

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});

