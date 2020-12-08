const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../model/User');
const { ErrorHandler } = require('../../helpers/error');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email }).select('+password');
    if (!existingUser) throw new ErrorHandler(401, 'Invalid Credentials');
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) throw new ErrorHandler(401, 'Invalid Credentials');
    const payload = { id: existingUser.id };
    const userJwt = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_LIFE,
    });
    req.session = {
      jwt: userJwt,
    };
    res.status(200).send(existingUser);
  } catch (error) {
    next(error);
  }
};
