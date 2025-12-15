/**
 * Flashcard controller
 * Handles flashcard operations
 */

const Flashcard = require('../models/Flashcard');

exports.getFlashcards = async (req, res, next) => {
  try {
    const { subject } = req.query;
    const query = { userId: req.userId };
    if (subject) {
      query.subject = subject;
    }

    const flashcards = await Flashcard.find(query).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: { flashcards }
    });
  } catch (error) {
    next(error);
  }
};

exports.createFlashcard = async (req, res, next) => {
  try {
    const { subject, front, back, difficulty } = req.body;

    const flashcard = await Flashcard.create({
      userId: req.userId,
      subject,
      front,
      back,
      difficulty: difficulty || 'medium'
    });

    res.status(201).json({
      success: true,
      data: { flashcard }
    });
  } catch (error) {
    next(error);
  }
};

exports.updateFlashcard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const flashcard = await Flashcard.findOneAndUpdate(
      { _id: id, userId: req.userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!flashcard) {
      return res.status(404).json({
        success: false,
        message: 'Flashcard not found'
      });
    }

    res.json({
      success: true,
      data: { flashcard }
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteFlashcard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const flashcard = await Flashcard.findOneAndDelete({
      _id: id,
      userId: req.userId
    });

    if (!flashcard) {
      return res.status(404).json({
        success: false,
        message: 'Flashcard not found'
      });
    }

    res.json({
      success: true,
      message: 'Flashcard deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

