require('dotenv').config();
const mongoose = require('mongoose');

const connectDatabase = () => {
  const URI = process.env.MONGODB_URL;
  mongoose.connect(
    URI,
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log('Connected to mongodb');
    }
  );
};
module.exports = connectDatabase;
