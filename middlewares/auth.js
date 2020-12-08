const jwt = require('jsonwebtoken');
const { ErrorHandler } = require('../helpers/error');

module.exports = function (req, res, next) {
  if (!req.session || !req.session.jwt)
    throw new ErrorHandler(401, 'No token, authorization denied');
  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.ACCESS_TOKEN_SECRET
    );
    req.currentUser = payload;
    next();
  } catch (error) {
    next(error);
  }
};
