import { SubComment } from '../models/SubComment.js';

exports.postSubComment = async (req, res) => {
  const newSubComment = new SubComment(req.body);
  try {
    const savedSubComment = await newSubComment.save();
    res.status(200).json(savedSubComment);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getIDSub = async (req, res) => {
  try {
    const subCommentList = await SubComment.find({ commentId: req.params.commentId }).sort({
      createdAt: 1,
    });
    res.status(200).json(subCommentList);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getCountSub = async (req, res) => {
  try {
    const count = await SubComment.find({ commentId: req.params.commentId }).count();
    res.status(200).json(count);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.putChangeLikes = async function (req, res) {
  try {
    const subComment = await SubComment.findOne({ _id: req.params.id });
    // like post
    await subComment.updateOne({
      $pull: { likes: { userId: req.body.userId } },
    });
    await subComment.updateOne({
      $push: {
        likes: {
          type: req.body.type,
          userId: req.body.userId,
          text: req.body.text,
          styleColor: req.body.styleColor,
        },
      },
    });
    res.status(200).json('The post has been ' + req.body.type);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.putLikesSub = async function (req, res) {
  try {
    const subComment = await SubComment.findOne({ _id: req.params.id });
    if (!subComment.likes.some((like) => like['userId'] === req.body.userId)) {
      // like post
      await subComment.updateOne({
        $push: {
          likes: {
            type: req.body.type,
            userId: req.body.userId,
            text: req.body.text,
            styleColor: req.body.styleColor,
          },
        },
      });
      res.status(200).json('The post has been ' + req.body.type);
    } else {
      await subComment.updateOne({
        $pull: { likes: { userId: req.body.userId } },
      });
      res.status(200).json('The post has dislike ');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
