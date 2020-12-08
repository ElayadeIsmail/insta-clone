import * as types from './types';
import profileApi from '../../api/profileApi';
import userApi from '../../api/userApi';
import { UPDATE_USER } from '../auth/types';
import { CLEAR_POSTS } from '../posts/types';

export const getProfileByUserId = (userId) => async (dispatch) => {
  try {
    const res = await profileApi.getProfileById(userId);
    dispatch({
      type: types.GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    if (!err.response) return;
    // const error = err.response.data.errors[0].message;
    dispatch({
      type: types.PROFILE_ERROR,
      payload: '',
    });
  }
};

export const updateFollowing = (userId) => async (dispatch) => {
  try {
    const res = await profileApi.handleFollow(userId);
    dispatch({
      type: types.UPDATE_FOLLOWING,
      payload: res.data,
    });
  } catch (err) {
    if (!err.response) return;
    const error = err.response.data.errors[0].message;
    dispatch({
      type: types.PROFILE_ERROR,
      payload: error,
    });
  }
};

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await profileApi.getCurrentProfile();
    dispatch({
      type: types.GET_CURRENT_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: types.PROFILE_ERROR,
      payload: 'Opps Something Wrong',
    });
  }
};

export const updateProfile = (data, setDisable, history) => async (
  dispatch
) => {
  try {
    const res = await profileApi.updateProfile(data);
    dispatch({
      type: types.UPDATE_PROFILE,
      payload: res.data.profile,
    });
    dispatch({
      type: CLEAR_POSTS,
    });
    dispatch({
      type: UPDATE_USER,
      payload: res.data.user,
    });
    setDisable(false);
    history.push('/home');
  } catch (err) {
    if (!err.response) return;
    const error = err.response.data.errors[0].message;
    dispatch({
      type: types.PROFILE_ERROR,
      payload: error,
    });
    setDisable(false);
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await userApi.getAllUsers();
    dispatch({
      type: types.GET_ALL_USERS,
      payload: res.data,
    });
  } catch (err) {
    if (!err.response) return;
    const error = err.response.data.errors[0].message;
    dispatch({
      type: types.PROFILE_ERROR,
      payload: error,
    });
  }
};

export const clearProfile = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_PROFILE,
  });
};
