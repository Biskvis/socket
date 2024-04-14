const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', socket => {

  socket.on('disconnect', () => {
  });

  socket.on('message', data => {
    io.emit('message', data); // Broadcast the message to all connected clients
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
});
