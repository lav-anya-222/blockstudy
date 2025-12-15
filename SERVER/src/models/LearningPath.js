/**
 * Learning Path model
 */

const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  order: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  resources: [String],
  estimatedTime: {
    type: Number,
    default: 0 // in minutes
  }
});

const learningPathSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: String,
  modules: [moduleSchema],
  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  estimatedDuration: {
    type: Number,
    default: 0 // in minutes
  }
}, {
  timestamps: true
});

learningPathSchema.index({ userId: 1 });

module.exports = mongoose.model('LearningPath', learningPathSchema);

