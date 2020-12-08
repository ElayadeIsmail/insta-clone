import * as types from './types';

const initialState = {
  isLoading: true,
  isAuthenticated: null,
  user: null,
  error: {
    loginError: '',
    registerError: '',
  },
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: payload,
        error: {
          loginError: '',
          registerError: '',
        },
      };
    case types.UPDATE_USER:
      return {
        ...state,
        user: payload,
        isLoading: false,
      };
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        error: {
          loginError: '',
          registerError: '',
        },
      };
    case types.REGISTER_FAILED:
      return {
        ...state,
        isAuthenticated: null,
        isLoading: false,
        error: { ...state.error, registerError: payload },
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: null,
        isLoading: false,
        error: { ...state.error, loginError: payload },
      };
    case types.AUTH_ERROR:
    case types.LOGOUT:
    case types.DELETE_USER:
      return {
        ...state,
        isAuthenticated: null,
        isLoading: false,
        error: {
          loginError: '',
          registerError: '',
        },
        user: null,
      };
    default:
      return state;
  }
}
