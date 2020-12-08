const { handleError } = require('../helpers/error');

module.exports = (error, req, res, next) => {
  handleError(error, res);
};
