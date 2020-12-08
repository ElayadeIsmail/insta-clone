const updateProfile = require('../../helpers/update-profile');
const Profile = require('../../model/Profile');
const User = require('../../model/User');
const Post = require('../../model/Post');

module.exports = async (req, res, next) => {
  try {
    let user = await User.findById(req.currentUser.id);
    const { newUser, newProfile } = await updateProfile(req, user);
    if (Object.keys(newUser).length !== 0 && newUser.constructor === Object) {
      user = await User.findOneAndUpdate(
        { _id: req.currentUser.id },
        { $set: newUser },
        { new: true }
      );
      await user.save();
    }
    const profile = await Profile.findOneAndUpdate(
      { user: req.currentUser.id },
      { $set: newProfile },
      { new: true }
    );
    await profile.save();
    const posts = await Post.find({ user: req.currentUser.id });
    res.status(202).json({
      user: {
        ...user._doc,
        followers: profile.followers.length,
        following: profile.following.length,
        posts: posts.length,
      },
      profile,
    });
  } catch (error) {
    next(error);
  }
};
