const Profile = require('../../model/Profile');
const { ErrorHandler } = require('../../helpers/error');
const Post = require('../../model/Post');

module.exports = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.params.user_id });
    if (!profile) throw new ErrorHandler(404, 'Profile Not Found');
    const userPosts = await Post.find({ user: req.params.user_id }).sort({
      date: -1,
    });
    if (req.params.user_id === req.currentUser.id) {
      profile.isCurrentUserProfile = true;
    }
    if (
      profile.followers.filter(
        (follower) => follower.user.toString() === req.currentUser.id
      ).length === 0
    ) {
      profile.isFollowing = false;
    } else {
      profile.isFollowing = true;
    }
    profile.posts = userPosts;
    res.status(200).send(profile);
  } catch (error) {
    next(error);
  }
};
