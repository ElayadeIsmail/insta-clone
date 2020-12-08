const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { ErrorHandler } = require('../../helpers/error');
const User = require('../../model/User');
const Profile = require('../../model/Profile');
const uploadImg = require('../../helpers/upload-img');

module.exports = async (req, res, next) => {
  try {
    const { username, profilePhoto, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) throw new ErrorHandler(401, 'Email Already in use');
    const url = await uploadImg(profilePhoto);
    user = new User({ username, profilePhoto: url, email, password });
    const salt = await bcrypt.genSalt(12);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    await new Profile({ user: user.id }).save();
    const payload = { id: user.id };
    const userJwt = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_LIFE,
    });
    req.session = {
      jwt: userJwt,
    };
    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
};
