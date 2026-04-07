const { Server } = require('socket.io');

let io;

module.exports = {
  init: (httpServer) => {
    io = new Server(httpServer, {
      cors: {
        origin: '*', // Adjust this for production
        methods: ['GET', 'POST']
      }
    });

    io.on('connection', (socket) => {
      console.log('A user connected:', socket.id);

      // Join a private room based on user ID for notifications
      socket.on('join_user_room', (userId) => {
        if (userId) {
          socket.join(`user_${userId}`);
          console.log(`User ${userId} joined their private room.`);
        }
      });

      socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
      });
    });

    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error('Socket.io not initialized!');
    }
    return io;
  },
  // Helper to emit to a specific user
  emitToUser: (userId, event, data) => {
    if (io) {
      io.to(`user_${userId}`).emit(event, data);
    }
  }
};
