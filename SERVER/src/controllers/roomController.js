/**
 * Study room controller
 * Handles study room operations
 */

const StudyRoom = require('../models/StudyRoom');

exports.getRooms = async (req, res, next) => {
  try {
    const { isPrivate } = req.query;
    const query = isPrivate === 'false' ? { isPrivate: false } : {};

    const rooms = await StudyRoom.find(query)
      .populate('createdBy', 'username avatar')
      .sort({ createdAt: -1 })
      .limit(50);

    res.json({
      success: true,
      data: { rooms }
    });
  } catch (error) {
    next(error);
  }
};

exports.createRoom = async (req, res, next) => {
  try {
    const { name, description, subject, maxParticipants, isPrivate } = req.body;

    const room = await StudyRoom.create({
      name,
      description,
      subject,
      createdBy: req.userId,
      maxParticipants: maxParticipants || 10,
      isPrivate: isPrivate || false,
      participants: [req.userId]
    });

    res.status(201).json({
      success: true,
      data: { room }
    });
  } catch (error) {
    next(error);
  }
};

exports.joinRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    const room = await StudyRoom.findById(id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: 'Room not found'
      });
    }

    if (room.participants.length >= room.maxParticipants) {
      return res.status(400).json({
        success: false,
        message: 'Room is full'
      });
    }

    if (!room.participants.includes(req.userId)) {
      room.participants.push(req.userId);
      await room.save();
    }

    res.json({
      success: true,
      data: { room }
    });
  } catch (error) {
    next(error);
  }
};

exports.leaveRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    const room = await StudyRoom.findById(id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: 'Room not found'
      });
    }

    room.participants = room.participants.filter(
      p => p.toString() !== req.userId.toString()
    );
    await room.save();

    res.json({
      success: true,
      message: 'Left room successfully'
    });
  } catch (error) {
    next(error);
  }
};

