import * as types from './types';
import { UPDATE_LIKES } from '../profile/types';
import postApi from '../../api/postApi';

export const getPosts = () => async (dispatch) => {
  try {
    const res = await postApi.getPosts();
    dispatch({
      type: types.GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    if (!err.response) return;
    const error = err.response.data.errors[0].message;
    dispatch({
      type: types.POST_ERROR,
      payload: error,
    });
  }
};

export const addPost = (image, { setProgress, setUploading }) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    onDownloadProgress: (progressEvent) => {
      const percentage = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      setProgress(percentage);
    },
  };
  try {
    const res = await postApi.addPost(image, config);
    dispatch({
      type: types.ADD_POST,
      payload: res.data,
    });
    setTimeout(() => setUploading(false), 100);
  } catch (err) {
    setUploading(false);
    if (!err.response) return;
    const error = err.response.data.errors[0].message;
    dispatch({
      type: types.POST_ERROR,
      payload: error,
    });
  }
};

export const addComment = (postId, body) => async (dispatch) => {
  console.log(body);
  try {
    const res = await postApi.addComment(postId, body);
    dispatch({
      type: types.ADD_COMMENT,
      payload: {
        postId,
        comments: res.data.comments,
        isCommented: res.data.isCommented,
      },
    });
    // dispatch({
    //   type: UPDATE_COMMENT,
    //   payload: {
    //     postId,
    //     comments: res.data.comments,
    //     isCommented: res.data.isCommented,
    //   },
    // });
  } catch (err) {
    if (!err.response) return;
    const error = err.response.data.errors[0].message;
    dispatch({
      type: types.POST_ERROR,
      payload: error,
    });
  }
};

export const handleLike = (postId) => async (dispatch) => {
  try {
    const res = await postApi.handleLike(postId);
    dispatch({
      type: types.HANDLE_LIKE,
      payload: {
        postId,
        likes: res.data.likes,
        isLiked: res.data.isLiked,
      },
    });
    dispatch({
      type: UPDATE_LIKES,
      payload: {
        postId,
        likes: res.data.likes,
        isLiked: res.data.isLiked,
      },
    });
  } catch (err) {
    if (!err.response) return;
    const error = err.response.data.errors[0].message;
    dispatch({
      type: types.POST_ERROR,
      payload: error,
    });
  }
};
