const { ErrorHandler } = require('../../helpers/error');
const Post = require('../../model/Post');

module.exports = async (req, res, next) => {
  try {
    const { post_id, comment_id } = req.params;
    const post = await Post.findById(post_id);
    const commentToRemove = post.comments.find(
      (comment) => comment.id === comment_id
    );
    if (!commentToRemove) throw new ErrorHandler(400, 'No Comment Found');
    if (commentToRemove.user._id != req.currentUser.id)
      throw new ErrorHandler(401, 'Unauthorized');
    post.comments = post.comments.filter(
      (comment) => comment.id !== commentToRemove.id
    );
    post.save();
    res.send(post.comments);
  } catch (error) {
    next(error);
  }
};
