/**
 * Socket service for real-time communication
 * Handles WebSocket connections for study rooms
 */

import { io, Socket } from 'socket.io-client';

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:5000';

let socket: Socket | null = null;

export const connectSocket = (roomId?: string): Socket => {
  if (socket?.connected) {
    return socket;
  }

  socket = io(SOCKET_URL, {
    transports: ['websocket'],
    auth: {
      token: localStorage.getItem('token'),
    },
  });

  socket.on('connect', () => {
    console.log('Socket connected:', socket?.id);
    if (roomId) {
      socket?.emit('join-room', roomId);
    }
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected');
  });

  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });

  return socket;
};

export const disconnectSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export const getSocket = (): Socket | null => {
  return socket;
};

// Room events
export const roomEvents = {
  joinRoom: (roomId: string) => {
    socket?.emit('join-room', roomId);
  },
  leaveRoom: (roomId: string) => {
    socket?.emit('leave-room', roomId);
  },
  sendMessage: (roomId: string, message: string) => {
    socket?.emit('room-message', { roomId, message });
  },
  onMessage: (callback: (data: any) => void) => {
    socket?.on('room-message', callback);
  },
  onUserJoined: (callback: (data: any) => void) => {
    socket?.on('user-joined', callback);
  },
  onUserLeft: (callback: (data: any) => void) => {
    socket?.on('user-left', callback);
  },
};

// Whiteboard events
export const whiteboardEvents = {
  draw: (roomId: string, data: any) => {
    socket?.emit('whiteboard-draw', { roomId, ...data });
  },
  onDraw: (callback: (data: any) => void) => {
    socket?.on('whiteboard-draw', callback);
  },
  clear: (roomId: string) => {
    socket?.emit('whiteboard-clear', { roomId });
  },
  onClear: (callback: () => void) => {
    socket?.on('whiteboard-clear', callback);
  },
};

