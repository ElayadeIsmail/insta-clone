import * as types from './types';
import { addComment, AddLike } from './utils';

const initialState = {
  posts: [],
  isLoading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: payload,
        isLoading: false,
      };
    case types.HANDLE_LIKE:
      return {
        ...state,
        posts: AddLike(state.posts, payload),
        isLoading: false,
      };
    case types.ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        isLoading: false,
      };
    case types.ADD_COMMENT:
      return {
        ...state,
        posts: addComment(state.posts, payload),
        isLoading: false,
      };
    case types.POST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case types.CLEAR_POSTS:
      return {
        ...state,
        posts: [],
        isLoading: true,
      };
    default:
      return state;
  }
}
