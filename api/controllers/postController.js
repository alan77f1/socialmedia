exports.post = async function (req, res) {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getFriendPosts = async function (req, res) {
  try {
    const currentUser = await User.findOne({ _id: req.params.userId });

    const myPosts = await Post.find({ userId: req.params.userId }); // get my post

    const followingPost = await Promise.all(
      currentUser.followingIds.map((id) => {
        return Post.find({ userId: id });
      })
    );

    res.json(myPosts.concat(...followingPost));
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getMyPosts = async function (req, res) {
  try {
    let myPosts;
    if (req.params.userId) {
      myPosts = await Post.find({ userId: req.params.userId }); // get my post
    } else {
      const currentUser = await User.findOne({ _id: req.params.username });
      myPosts = await Post.find({ userId: currentUser._id }); // get my post
    }
    res.json(myPosts);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.putChangelikes = async function (req, res) {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    await post.updateOne({
      $pull: { likes: { userId: req.body.userId } },
    });
    // like post
    await post.updateOne({
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

exports.putLikePosts = async function (req, res) {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    if (!post.likes.some((like) => like['userId'] === req.body.userId)) {
      // like post
      await post.updateOne({
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
      await post.updateOne({
        $pull: { likes: { userId: req.body.userId } },
      });
      res.status(200).json('The post has dislike ');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
