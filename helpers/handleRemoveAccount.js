const Post = require('../model/Post');
const Profile = require('../model/Profile');
const User = require('../model/User');

// handle profiles after deleting user
const handleProfiles = async (userId) => {
  await Profile.findOneAndRemove({ user: userId });
  const profiles = await Profile.find({});
  if (profiles.length === 0) return;

  profiles.map(async (profile) => {
    await Profile.updateOne(
      { _id: profile.id },
      { $pull: { followers: { user: userId }, following: { user: userId } } },
      { safe: true, multi: true }
    );
  });
};

// handle posts after deleting user
const handlePosts = async (userId) => {
  await Post.deleteMany({ user: userId });
  const posts = await Post.find({});
  if (posts.length > 0) {
    posts.map(async (post) => {
      await Post.findOneAndUpdate(
        { _id: post.id },
        { $pull: { likes: { user: userId }, comments: { user: userId } } },
        { multi: true, safe: true }
      );
    });
  }
};

module.exports = async (userId) => {
  await handleProfiles(userId);
  await handlePosts(userId);
  await User.findOneAndRemove({ _id: userId });
};
