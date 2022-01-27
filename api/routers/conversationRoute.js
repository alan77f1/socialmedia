const express = require('express');
const router = express.Router();
const Conversation = require('../models/Conversation');
const conversationController = require('../controllers/conversationController');
// create a conversation: [POST] api/conversations/
router.post('/', conversationController.postConversation);

// get list conversation of loginUser
router.get('/all', conversationController.getConversation);

// get a conversation by memberId [GET] api/conversations
router.put('/', conversationController.putConversation);

module.exports = router;
