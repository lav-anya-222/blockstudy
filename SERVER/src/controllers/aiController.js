/**
 * AI controller
 * Handles AI-related operations (study plans, chat, etc.)
 */

const { generateStudyPlan, chatWithAI } = require('../services/aiService');

exports.generatePlan = async (req, res, next) => {
  try {
    const { subject, duration, goals, currentLevel } = req.body;

    if (!subject || !duration || !goals) {
      return res.status(400).json({
        success: false,
        message: 'Please provide subject, duration, and goals'
      });
    }

    const plan = await generateStudyPlan({
      subject,
      duration,
      goals,
      currentLevel
    });

    res.json({
      success: true,
      data: { plan }
    });
  } catch (error) {
    next(error);
  }
};

exports.chat = async (req, res, next) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a message'
      });
    }

    const response = await chatWithAI(message, req.userId);

    res.json({
      success: true,
      data: { response }
    });
  } catch (error) {
    next(error);
  }
};

