const User = require('../../model/User');

module.exports = async (req, res, next) => {
  try {
    let users = await User.find().sort({ date: -1 });
    users = users.filter((user) => user.id !== req.currentUser.id);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
