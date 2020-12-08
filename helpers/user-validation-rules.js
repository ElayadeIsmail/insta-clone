const { body } = require('express-validator');

const RegisterValidatorRules = () => {
  return [
    body('username').not().isEmpty().withMessage('username is required'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('profilePhoto')
      .not()
      .isEmpty()
      .withMessage('Profile picture is required'),
    body('password')
      .trim()
      .isLength({ min: 6, max: 20 })
      .withMessage('Password must be between 6 and 20 characters'),
  ];
};

const signInValidatorRules = () => {
  return [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 6, max: 20 })
      .withMessage('Password must be between 6 and 20 characters'),
  ];
};

module.exports = { RegisterValidatorRules, signInValidatorRules };
