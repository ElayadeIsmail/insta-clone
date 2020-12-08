const {
  handleFollow,
  handleUnFollowing,
} = require('../../helpers/handle-following');
const Profile = require('../../model/Profile');

module.exports = async (req, res, next) => {
  try {
    const currentProfile = await Profile.findOne({ user: req.currentUser.id });
    const profileToFollow = await Profile.findOne({ user: req.params.user_id });
    const currentUserData = { currentProfile, currentUser: req.currentUser.id };
    const userToFollowData = {
      profileToFollow,
      userToFollow: req.params.user_id,
    };
    if (
      profileToFollow.followers.filter(
        (follower) => follower.user.toString() === req.currentUser.id
      ).length === 0
    ) {
      await handleFollow(userToFollowData, currentUserData);
    } else {
      await handleUnFollowing(userToFollowData, currentUserData);
    }
    res
      .status(200)
      .send({
        followers: profileToFollow.followers,
        isFollowing: profileToFollow.isFollowing,
      });
  } catch (error) {
    next(error);
  }
};
