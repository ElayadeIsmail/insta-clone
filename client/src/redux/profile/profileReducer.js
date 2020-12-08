import * as types from './types';
import { ADD_POST } from '../posts/types';
import { LOGOUT } from '../auth/types';
import { AddLike } from '../posts/utils';

const initialState = {
  profile: null,
  isLoading: true,
  currentProfile: null,
  currentProfileLoading: true,
  users: [],
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PROFILE:
      return {
        ...state,
        profile: payload,
        isLoading: false,
      };
    case types.UPDATE_PROFILE:
      return {
        ...state,
        currentProfile: payload,
        currentProfileLoading: false,
        isLoading: true,
      };
    case types.GET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: payload,
        currentProfileLoading: false,
      };
    case ADD_POST:
      return {
        ...state,
        profile: { ...state.profile, posts: [payload, ...state.profile.posts] },
        isLoading: false,
      };
    case types.GET_ALL_USERS:
      return {
        ...state,
        users: payload,
        isLoading: true,
      };
    case types.UPDATE_LIKES:
      return {
        ...state,
        profile: {
          ...state.profile,
          posts: AddLike(state.profile.posts, payload),
        },
        isLoading: false,
      };
    case types.UPDATE_FOLLOWING:
      return {
        ...state,
        profile: {
          ...state.profile,
          followers: payload.followers,
          isFollowing: payload.isFollowing,
        },
        isLoading: false,
      };
    case types.PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case types.CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        isLoading: true,
      };
    case LOGOUT:
      return {
        profile: null,
        isLoading: true,
        currentProfile: null,
        currentProfileLoading: true,
        users: [],
        error: {},
      };
    default:
      return state;
  }
}
