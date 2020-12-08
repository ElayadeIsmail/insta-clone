const likePost = async (post, userId) => {
  post.likes.unshift({ user: userId });
  post.isLiked = true;
  await post.save();
};

const unlikePost = async (post, userId) => {
  const removeIndex = post.likes
    .map((like) => like.user.toString())
    .indexOf(userId);
  post.likes.splice(removeIndex, 1);
  post.isLiked = false;
  await post.save();
};

module.exports = { likePost, unlikePost };
