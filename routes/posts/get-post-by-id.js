const { ErrorHandler } = require('../../helpers/error');
const Post = require('../../model/Post');

module.exports = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (!post) throw new ErrorHandler(404, 'Post not found');
    res.status(200).send(post);
  } catch (error) {
    next(error);
  }
};
