// Dependencies
const mongoose = require('mongoose');
const { mongodbURL } = require('../secret');

// MongoDB Connection
const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(mongodbURL, options);
    console.log('Connected to MongoDB Successfully');

    mongoose.connection.on('error', (error) => {
      console.log('MongoDB connection error!', error);
    });
  } catch (error) {
    console.error('Could Not Connect to MongoDB', error.toString());
  }
};

// exports
module.exports = connectDB;
