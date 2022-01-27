const express = require('express');
const Message = require('../models/Message');
const messageController = require('../controllers/messageController');
const router = express.Router();

// create a message [POST] api/messages/
router.post('/', messageController.postMessage);

// get message by conversationId [GET] api/messages/
router.get('/:conversationId', messageController.getMessage);

module.exports = router;
