const express = require('express');
const Story = require('../models/Story');
const User = require('../models/User');
const storyController = require('../controllers/storyController');

const router = express.Router();
// [POST] stories/
router.post('/', storyController.postStory);

// [GET] stories/
router.get('/:userId', storyController.getStory);

// [GET] stories/
router.get('/view-home/:userId', storyController.getViewHomeStory);

// update viewer [PUT] /stories
router.put('/:id/viewer', storyController.putViewer);

// update viewer [PUT] /stories
router.put('/:id/likes', storyController.putLikes);

module.exports = router;
