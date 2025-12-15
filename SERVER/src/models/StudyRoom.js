/**
 * Study Room model
 */

const mongoose = require('mongoose');

const studyRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a room name']
  },
  description: String,
  subject: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  maxParticipants: {
    type: Number,
    default: 10,
    min: 2,
    max: 50
  },
  isPrivate: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

studyRoomSchema.index({ createdBy: 1 });
studyRoomSchema.index({ isPrivate: 1 });

module.exports = mongoose.model('StudyRoom', studyRoomSchema);

