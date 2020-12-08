const Post = require('../../model/Post');
const Profile = require('../../model/Profile');
const User = require('../../model/User');

module.exports = async (req, res, next) => {
  try {
    const user = await User.findById(req.currentUser.id);
    const profile = await Profile.findOne({ user: req.currentUser.id });
    const posts = await Post.find({ user: req.currentUser.id });

    res.send({
      ...user._doc,
      followers: profile.followers.length,
      following: profile.following.length,
      posts: posts.length,
    });
  } catch (error) {
    next(error);
  }
};
