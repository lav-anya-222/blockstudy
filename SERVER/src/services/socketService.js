/**
 * Socket service
 * Handles WebSocket connections for real-time features
 */

const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');

let io;

exports.initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || 'http://localhost:3000',
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  // Authentication middleware for socket
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error('Authentication error'));
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.userId = decoded.userId;
      next();
    } catch (error) {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.userId}`);

    // Join room
    socket.on('join-room', (roomId) => {
      socket.join(roomId);
      socket.to(roomId).emit('user-joined', { userId: socket.userId });
    });

    // Leave room
    socket.on('leave-room', (roomId) => {
      socket.leave(roomId);
      socket.to(roomId).emit('user-left', { userId: socket.userId });
    });

    // Room message
    socket.on('room-message', (data) => {
      socket.to(data.roomId).emit('room-message', {
        userId: socket.userId,
        message: data.message,
        timestamp: new Date()
      });
    });

    // Whiteboard draw
    socket.on('whiteboard-draw', (data) => {
      socket.to(data.roomId).emit('whiteboard-draw', {
        userId: socket.userId,
        ...data
      });
    });

    // Whiteboard clear
    socket.on('whiteboard-clear', (data) => {
      socket.to(data.roomId).emit('whiteboard-clear');
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.userId}`);
    });
  });

  return io;
};

exports.getIO = () => {
  if (!io) {
    throw new Error('Socket.IO not initialized');
  }
  return io;
};

