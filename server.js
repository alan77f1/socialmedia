const express = require('express');
const connectDatabase = require('./config/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const SocketApi = require('./SocketApi');
const { ExpressPeerServer } = require('peer');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// SocketApi
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Create connect client and server
io.on('connection', (socket) => {
  SocketApi(socket);
});

// Create peer server
ExpressPeerServer(http, { path: '/' });

// Routes
app.use('/api', require('./routes/authRouter'));
app.use('/api', require('./routes/userRouter'));
app.use('/api', require('./routes/postRouter'));
app.use('/api', require('./routes/commentRouter'));
app.use('/api', require('./routes/notifyRouter'));
app.use('/api', require('./routes/messageRouter'));

// Connecting to database
connectDatabase();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
http.listen(port, () => {
  console.log('Server is running on port', port);
});
