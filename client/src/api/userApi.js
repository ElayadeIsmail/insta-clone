import axios from 'axios';

const loadUser = () => axios.get('/api/users/currentuser');

const register = (username, profilePhoto, email, password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ username, profilePhoto, email, password });
  return axios.post('/api/users/register', body, config);
};

const login = (email, password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  return axios.post('/api/users/signin', body, config);
};

const deleteUser = () => axios.delete('/api/users');

const logout = () => axios.get('/api/users/signout');

const getAllUsers = () => axios.get('/api/users/all');

export default {
  loadUser,
  register,
  login,
  logout,
  getAllUsers,
  deleteUser,
};
