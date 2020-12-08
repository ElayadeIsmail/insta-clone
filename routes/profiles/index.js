const express = require('express');
const router = express.Router();

const auth = require('../../middlewares/auth');
const getCurrentProfile = require('./get-current-profile');
const updateProfile = require('./update-profile');
const getProfileByUserId = require('./get-profile-by-user-id');
const handleFollowUser = require('./handle-follow-user');

router.get('/me', auth, getCurrentProfile);

// Update Profile
router.post('/', auth, updateProfile);

// Get profile by ID
router.get('/user/:user_id', auth, getProfileByUserId);

router.put('/following/:user_id', auth, handleFollowUser);

module.exports = router;
