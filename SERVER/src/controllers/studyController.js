/**
 * Study session controller
 * Handles study session operations
 */

const StudySession = require('../models/StudySession');

exports.getSessions = async (req, res, next) => {
  try {
    const sessions = await StudySession.find({ userId: req.userId })
      .sort({ startTime: -1 })
      .limit(100);

    res.json({
      success: true,
      data: { sessions }
    });
  } catch (error) {
    next(error);
  }
};

exports.createSession = async (req, res, next) => {
  try {
    const { subject, duration, startTime, endTime, resources, notes, focusScore } = req.body;

    const session = await StudySession.create({
      userId: req.userId,
      subject,
      duration,
      startTime: startTime || new Date(),
      endTime: endTime || new Date(),
      resources,
      notes,
      focusScore
    });

    res.status(201).json({
      success: true,
      data: { session }
    });
  } catch (error) {
    next(error);
  }
};

exports.updateSession = async (req, res, next) => {
  try {
    const { id } = req.params;
    const session = await StudySession.findOneAndUpdate(
      { _id: id, userId: req.userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Session not found'
      });
    }

    res.json({
      success: true,
      data: { session }
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSession = async (req, res, next) => {
  try {
    const { id } = req.params;
    const session = await StudySession.findOneAndDelete({
      _id: id,
      userId: req.userId
    });

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Session not found'
      });
    }

    res.json({
      success: true,
      message: 'Session deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

