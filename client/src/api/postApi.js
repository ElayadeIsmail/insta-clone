import axios from 'axios';

const getPosts = () => axios.get('/api/posts');

const addPost = (image, config) => {
  return axios.post('/api/posts/post', { image }, config);
};

const handleLike = (postId) => axios.put(`/api/posts/post/like/${postId}`);

const addComment = (postId, body) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios.post(
    `/api/posts/comment/${postId}`,
    JSON.stringify({ body }),
    config
  );
};

export default { getPosts, addPost, handleLike, addComment };
