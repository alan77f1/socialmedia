const express = require('express');
const User = require('../models/User');
const router = express.Router();
const commentController = require('../controllers/commentController');
const Comment = require('./../models/Comment');

// create: [POST] api/comments
router.post('/', commentController.postComment);

// get  count comment of post: [GET] api/comments/count/:postId/:skip
router.get('/count', commentController.getComment);

// get  list comment of post: [GET] api/comments/:postId/:skip
router.get('/:postId/:skip', commentController.getListComment);

// changelikes comment
router.put('/:id/changelikes', commentController.putChangeLike);

// like comment
router.put('/:id/likes', commentController.putLikeComment);

module.exports = router;
