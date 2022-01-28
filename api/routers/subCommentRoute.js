const express = require('express');
const User = require('../models/User');
const SubComment = require('./../models/SubComment');
const subCommentController = require('../controllers/subCommentController');
const router = express.Router();

// create: [POST] api/subComments
router.post('/', subCommentController.postSubComment);

router.get('/:commentId', subCommentController.getIDSub);

router.get('/:commentId/count', subCommentController.getCountSub);

// changelikes comment
router.put('/:id/changelikes', subCommentController.putChangeLikes);

// like comment
router.put('/:id/likes', subCommentController.putLikesSub);

module.exports = router;

/*
// get  count comment of post: [GET] api/comments/count/:postId/:skip
router.get('/count', async (req, res) => {
    try {
        // Cloud doesn't allow unauthenticated invocations
        // const count = await Comment.countDocuments({ postId: req.body.postId });
        const count = await Comment.countDocuments({ postId: req.query.postId });
        res.status(200).json(count);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get  list comment of post: [GET] api/comments/:postId/:skip

*/
