const express = require('express');
const app = express();
const port = 8800;

// library
var morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
var multer = require('multer');
const helmet = require('helmet');

// use library
dotenv.config();
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log('---connected to mongoDB---');
});

// middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

// router
const authRoute = require('./routers/authRoute');
const postRoute = require('./routers/postRoute');

// app
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

//Uploading multiple files
app.post(
  '/api/uploads',
  upload.array('imgCollections', 10),
  (req, res, next) => {
    try {
      return res.status(200).json('File uploaded successfully');
    } catch (error) {
      console.log(error);
    }
  }
);
app.listen(port, () => {
  console.log(`------API START AT: http://localhost:${port}-----`);
});
