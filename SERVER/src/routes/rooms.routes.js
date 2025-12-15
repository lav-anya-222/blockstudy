/**
 * Study room routes
 */

const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.get('/', roomController.getRooms);
router.post('/', roomController.createRoom);
router.post('/:id/join', roomController.joinRoom);
router.post('/:id/leave', roomController.leaveRoom);

module.exports = router;

