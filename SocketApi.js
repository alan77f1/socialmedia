let users = [];

const SocketApi = (socket) => {
  // Listens connect from client
  socket.on('joinUser', (user) => {
    users.push({ id: user._id, socketId: socket.id, followers: user.followers });
  });

  socket.on('disconnect', () => {
    users = users.filter((user) => user.socketId !== socket.id);
  });

  // Server listens for likePost from client
  socket.on('likePost', (newPost) => {
    const ids = [...newPost.user.followers, newPost.user._id];
    const clients = users.filter((user) => ids.includes(user.id));

    if (clients.length > 0) {
      clients.forEach((client) => {
        // Server replays this likePost to clients
        socket.to(`${client.socketId}`).emit('likeToClient', newPost);
      });
    }
  });

  // Server listens for unLikePost from client
  socket.on('unLikePost', (newPost) => {
    const ids = [...newPost.user.followers, newPost.user._id];
    const clients = users.filter((user) => ids.includes(user.id));

    if (clients.length > 0) {
      clients.forEach((client) => {
        // Server replays this unLikePost to clients
        socket.to(`${client.socketId}`).emit('unLikeToClient', newPost);
      });
    }
  });

  // Server listens for createComment from client
  socket.on('createComment', (newPost) => {
    const ids = [...newPost.user.followers, newPost.user._id];
    const clients = users.filter((user) => ids.includes(user.id));

    if (clients.length > 0) {
      clients.forEach((client) => {
        socket.to(`${client.socketId}`).emit('createCommentToClient', newPost);
      });
    }
  });

  // Server listens for deleteComment from client
  socket.on('deleteComment', (newPost) => {
    const ids = [...newPost.user.followers, newPost.user._id];
    const clients = users.filter((user) => ids.includes(user.id));

    if (clients.length > 0) {
      clients.forEach((client) => {
        socket.to(`${client.socketId}`).emit('deleteCommentToClient', newPost);
      });
    }
  });

  // Server listens for follow from client
  socket.on('follow', (newUser) => {
    const user = users.find((user) => user.id === newUser._id);
    user && socket.to(`${user.socketId}`).emit('followToClient', newUser);
  });

  // Server listens for unFollow from client
  socket.on('unFollow', (newUser) => {
    const user = users.find((user) => user.id === newUser._id);
    user && socket.to(`${user.socketId}`).emit('unFollowToClient', newUser);
  });

  // Server listens for createNotify from client
  socket.on('createNotify', (msg) => {
    const client = users.find((user) => msg.recipients.includes(user.id));
    client && socket.to(`${client.socketId}`).emit('createNotifyToClient', msg);
  });

  // Server listens for removeNotify from client
  socket.on('removeNotify', (msg) => {
    const client = users.find((user) => msg.recipients.includes(user.id));
    client && socket.to(`${client.socketId}`).emit('removeNotifyToClient', msg);
  });

  // Server listens for addMessage from client
  socket.on('addMessage', (msg) => {
    const user = users.find((user) => user.id === msg.recipient);
    user && socket.to(`${user.socketId}`).emit('addMessageToClient', msg);
  });
};

module.exports = SocketApi;
