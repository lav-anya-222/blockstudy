/**
 * Flashcard routes
 */

const express = require('express');
const router = express.Router();
const flashcardController = require('../controllers/flashcardController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.get('/', flashcardController.getFlashcards);
router.post('/', flashcardController.createFlashcard);
router.put('/:id', flashcardController.updateFlashcard);
router.delete('/:id', flashcardController.deleteFlashcard);

module.exports = router;

