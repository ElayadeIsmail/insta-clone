const { body } = require('express-validator');

const postValidatorRules = () => {
  return [body('image').not().isEmpty().withMessage('Image is required')];
};

module.exports = postValidatorRules;
