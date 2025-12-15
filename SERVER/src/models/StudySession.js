/**
 * Study Session model
 */

const mongoose = require('mongoose');

const studySessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  subject: {
    type: String,
    required: [true, 'Please provide a subject']
  },
  duration: {
    type: Number,
    required: [true, 'Please provide duration'],
    min: 0
  },
  startTime: {
    type: Date,
    required: true,
    default: Date.now
  },
  endTime: {
    type: Date,
    required: true
  },
  resources: [{
    type: String
  }],
  notes: {
    type: String,
    default: ''
  },
  focusScore: {
    type: Number,
    min: 0,
    max: 100
  }
}, {
  timestamps: true
});

// Indexes
studySessionSchema.index({ userId: 1, startTime: -1 });
studySessionSchema.index({ subject: 1 });

module.exports = mongoose.model('StudySession', studySessionSchema);

