/**
 * AI routes
 */

const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.post('/generate-plan', aiController.generatePlan);
router.post('/chat', aiController.chat);

module.exports = router;

