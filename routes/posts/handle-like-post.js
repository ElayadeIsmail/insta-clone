const { likePost, unlikePost } = require('../../helpers/handle-likes');
const Post = require('../../model/Post');

module.exports = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (!post) throw new ErrorHandler(400, 'Post Not Found');
    if (
      post.likes.filter((like) => like.user.toString() === req.currentUser.id)
        .length === 0
    ) {
      await likePost(post, req.currentUser.id);
    } else {
      await unlikePost(post, req.currentUser.id);
    }
    res.send({ likes: post.likes, isLiked: post.isLiked });
  } catch (error) {
    next(error);
  }
};
