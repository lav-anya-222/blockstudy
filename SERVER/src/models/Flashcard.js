/**
 * Flashcard model
 */

const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  front: {
    type: String,
    required: [true, 'Please provide front content']
  },
  back: {
    type: String,
    required: [true, 'Please provide back content']
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  },
  lastReviewed: Date,
  nextReview: Date,
  reviewCount: {
    type: Number,
    default: 0
  },
  masteryLevel: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  }
}, {
  timestamps: true
});

flashcardSchema.index({ userId: 1, subject: 1 });
flashcardSchema.index({ nextReview: 1 });

module.exports = mongoose.model('Flashcard', flashcardSchema);

