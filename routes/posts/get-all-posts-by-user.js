const Post = require('../../model/Post');

module.exports = async (req, res, next) => {
  try {
    const posts = await Post.find({ user: req.params.user_id }).sort({
      date: -1,
    });
    res.status(200).send(posts);
  } catch (error) {
    next(error);
  }
};
