exports.postComment = async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getComment = async (req, res) => {
  try {
    // Cloud doesn't allow unauthenticated invocations
    // const count = await Comment.countDocuments({ postId: req.body.postId });
    const count = await Comment.countDocuments({ postId: req.query.postId });
    res.status(200).json(count);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getListComment = async (req, res) => {
  try {
    const commentList = await Comment.find({ postId: req.params.postId })
      .sort({ createdAt: -1 })
      .skip(Number.parseInt(req.params.skip))
      .limit(3);
    res.status(200).json(commentList);
  } catch (error) {
    res.status(500).json(error);
  }
  // res.send(req.params.skip);
};

exports.putChangeLike = async function (req, res) {
  try {
    const comment = await Comment.findOne({ _id: req.params.id });
    // like post
    await comment.updateOne({
      $pull: { likes: { userId: req.body.userId } },
    });
    await comment.updateOne({
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

exports.putLikeComment = async function (req, res) {
  try {
    const comment = await Comment.findOne({ _id: req.params.id });
    if (!comment.likes.some((like) => like['userId'] === req.body.userId)) {
      // like post
      await comment.updateOne({
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
      await comment.updateOne({
        $pull: { likes: { userId: req.body.userId } },
      });
      res.status(200).json('The post has dislike ');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
