/**
 * Study session routes
 */

const express = require('express');
const router = express.Router();
const studyController = require('../controllers/studyController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.get('/sessions', studyController.getSessions);
router.post('/session', studyController.createSession);
router.put('/session/:id', studyController.updateSession);
router.delete('/session/:id', studyController.deleteSession);

module.exports = router;

