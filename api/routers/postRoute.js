const express = require('express');
const User = require('../models/User');
const postController = require('../controllers/postController');
const Post = require('./../models/Post');

const router = express.Router();
// create: [POST] api/posts
router.post('/', postController.post);

// get my post and friends'post: [GET] api/posts
router.get('/:userId', postController.getFriendPosts);

// get my post [GET] api/posts/myposts
router.get('/:userId/me', postController.getMyPosts);

// // changelikes post
router.put('/:id/changelikes', postController.putChangelikes);

// like post
router.put('/:id/likes', postController.putLikePosts);

module.exports = router;
