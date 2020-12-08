export const AddLike = (posts, payload) => {
  const { postId, likes, isLiked } = payload;
  return posts.map((post) =>
    post.id === postId ? { ...post, likes, isLiked } : post
  );
};

export const addComment = (posts, payload) => {
  const { postId, comments, isCommented } = payload;
  return posts.map((post) =>
    post.id === postId ? { ...post, comments, isCommented } : post
  );
};
