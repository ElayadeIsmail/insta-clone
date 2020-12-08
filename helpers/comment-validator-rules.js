const { body } = require('express-validator');

const commentValidatorRules = () => {
  return [body('body').not().isEmpty().withMessage('comment Body is Required')];
};

module.exports = commentValidatorRules;
