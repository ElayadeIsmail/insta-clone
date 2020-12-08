import axios from 'axios';

const getProfileById = (userId) => axios.get(`/api/profile/user/${userId}`);

const handleFollow = (userId) => axios.put(`/api/profile/following/${userId}`);

const getCurrentProfile = () => axios.get('/api/profile/me');

const updateProfile = (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(data);
  return axios.post('/api/profile', body, config);
};

export default {
  getProfileById,
  handleFollow,
  updateProfile,
  getCurrentProfile,
};
