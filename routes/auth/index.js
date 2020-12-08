const express = require('express');
const router = express.Router();

const {
  RegisterValidatorRules,
  signInValidatorRules,
} = require('../../helpers/user-validation-rules');
const validate = require('../../middlewares/validator');
const auth = require('../../middlewares/auth');
const currentUser = require('./current-user');
const signIn = require('./sign-in');
const register = require('./register');
const deleteUser = require('./delete-user');
const getAllUsers = require('./get-all-users');
const signOut = require('./sign-out');

// get the current user Route
router.get('/currentuser', auth, currentUser);

// Register a new User Route
router.post('/register', RegisterValidatorRules(), validate, register);

//  Sign In an Existing user
router.post('/signin', signInValidatorRules(), validate, signIn);
//  Get All Users
router.get('/all', auth, getAllUsers);

// delete Account
router.delete('/', auth, deleteUser);

router.get('/signout', auth, signOut);

module.exports = router;
