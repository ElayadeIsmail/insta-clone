const handleFollow = async (follower, following) => {
  const { userToFollow, profileToFollow } = follower;
  const { currentUser, currentProfile } = following;
  profileToFollow.followers.unshift({ user: currentUser });
  currentProfile.following.unshift({ user: userToFollow });
  profileToFollow.isFollowing = true;
  await profileToFollow.save();
  await currentProfile.save();
};

const handleUnFollowing = async (follower, following) => {
  const { userToFollow, profileToFollow } = follower;
  const { currentUser, currentProfile } = following;
  const removeIndexFollower = profileToFollow.followers
    .map((follower) => follower.user.toString())
    .indexOf(currentUser);
  profileToFollow.followers.splice(removeIndexFollower, 1);
  profileToFollow.isFollowing = false;
  await profileToFollow.save();
  const removeIndexFollowing = currentProfile.following
    .map((following) => following.user.toString())
    .indexOf(userToFollow);
  currentProfile.following.splice(removeIndexFollowing, 1);
  await currentProfile.save();
};

module.exports = { handleFollow, handleUnFollowing };
