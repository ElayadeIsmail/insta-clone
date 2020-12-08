const Post = require('../../model/Post');

module.exports = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    posts.map((post) => {
      if (
        post.likes.filter((like) => like.user.toString() === req.currentUser.id)
          .length === 0
      ) {
        post.isLiked = false;
      } else {
        post.isLiked = true;
      }
    });
    res.status(200).send(posts);
  } catch (error) {
    next(error);
  }
};
