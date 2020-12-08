import { combineReducers } from 'redux';
import auth from './auth/authReducer';
import posts from './posts/postsReducer';
import profile from './profile/profileReducer';

export default combineReducers({
  auth,
  profile,
  posts,
});
