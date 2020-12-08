const Post = require('../../model/Post');

module.exports = async (req, res, next) => {
  try {
    const { body } = req.body;
    const post = await Post.findById(req.params.post_id);
    if (!post) throw new ErrorHandler(401, 'No post found!');
    const comment = { user: req.currentUser.id, body };
    post.comments.push(comment);
    post.isCommented = true;
    await post.save();
    res.send({ comments: post.comments, isCommented: post.isCommented });
  } catch (error) {
    next(error);
  }
};
