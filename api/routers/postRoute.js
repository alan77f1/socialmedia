const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();
// create: [POST] api/posts
router.post('/', postController.postCreate);

// get my post and friends'post: [GET] api/posts
router.get('/:userId', postController.getFriendPosts);

// get my post [GET] api/posts/myposts
router.get('/:userId/me', postController.getMyPosts);

// // changelikes post
router.put('/:id/changelikes', postController.putChangelikes);

// like post
router.put('/:id/likes', postController.putLikePosts);

module.exports = router;
