const express = require('express');
const storyController = require('../controllers/storyController');

const router = express.Router();
// [POST] stories/
router.post('/', function (req, res) {
  storyController.postStory;
});

// [GET] stories/
router.get('/:userId', storyController.getStory);

// [GET] stories/
router.get('/view-home/:userId', storyController.getViewHomeStory);

// update viewer [PUT] /stories
router.put('/:id/viewer', storyController.putViewer);

// update viewer [PUT] /stories
router.put('/:id/likes', storyController.putLikes);

module.exports = router;
