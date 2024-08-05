const mongoose = require('mongoose');
// require('dotenv').config();

const dbURI = process.env.MONGODB_URI;

const connectDB = async () => {
  console.log( dbURI)
  try {
    await mongoose.connect(dbURI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;