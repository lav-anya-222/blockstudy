/**
 * User model
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false
  },
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    unique: true,
    trim: true
  },
  avatar: {
    type: String,
    default: ''
  },
  learningPlanets: [{
    subject: String,
    progress: { type: Number, default: 0, min: 0, max: 100 },
    createdAt: { type: Date, default: Date.now }
  }],
  achievements: [{
    name: String,
    description: String,
    icon: String,
    unlockedAt: { type: Date, default: Date.now },
    rarity: { type: String, enum: ['common', 'rare', 'epic', 'legendary'], default: 'common' }
  }],
  studyTime: {
    type: Number,
    default: 0 // in minutes
  },
  streak: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 1
  },
  xp: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for faster queries
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });

module.exports = mongoose.model('User', userSchema);

