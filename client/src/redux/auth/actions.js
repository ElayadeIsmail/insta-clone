import * as types from './types';
import { CLEAR_POSTS } from '../posts/types';
import userApi from '../../api/userApi';

export const loadUser = () => async (dispatch) => {
  try {
    const res = await userApi.loadUser();
    dispatch({
      type: types.USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: types.AUTH_ERROR,
    });
  }
};

export const registerUser = (
  username,
  profilePhoto,
  email,
  password,
  setDisabled
) => async (dispatch) => {
  try {
    const res = await userApi.register(username, profilePhoto, email, password);
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    setDisabled(false);
  } catch (err) {
    if (!err.response) return;
    const error = err.response.data.errors[0].message;
    dispatch({
      type: types.REGISTER_FAILED,
      payload: error,
    });
    setDisabled(false);
  }
};

export const login = (email, password, setDisabled) => async (dispatch) => {
  try {
    const res = await userApi.login(email, password);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    setDisabled(false);
  } catch (err) {
    if (!err.response) return;
    const error = err.response.data.errors[0].message;
    dispatch({
      type: types.LOGIN_FAILED,
      payload: error,
    });
    setDisabled(false);
  }
};

export const deleteUser = () => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await userApi.deleteUser();
      dispatch({
        type: types.DELETE_USER,
      });
    } catch (err) {
      if (!err.response) return;
      const error = err.response.data.errors[0].message;
      dispatch({
        type: types.AUTH_ERROR,
        payload: error,
      });
    }
  }
};

export const logout = () => async (dispatch) => {
  await userApi.logout();
  dispatch({
    type: CLEAR_POSTS,
  });
  dispatch({
    type: types.LOGOUT,
  });
};
