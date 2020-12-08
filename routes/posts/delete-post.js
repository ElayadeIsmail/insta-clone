const Post = require('../../model/Post');

module.exports = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (post.user.toString() !== req.currentUser.id)
      throw new ErrorHandler(401, 'Unauthorized');
    await post.remove();
    res.status(200).json({ msg: 'Post Deleted' });
  } catch (error) {
    next(error);
  }
};
