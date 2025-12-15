/**
 * Database configuration
 * MongoDB connection setup
 */

const mongoose = require('mongoose');

exports.connectDatabase = async () => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/studysphere';

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(mongoURI, options);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
};

