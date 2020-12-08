const { ErrorHandler } = require('../../helpers/error');
const Profile = require('../../model/Profile');

module.exports = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.currentUser.id });
    if (!profile) throw new ErrorHandler(404, 'Sorry user not found');
    res.status(200).send(profile);
  } catch (error) {
    next(error);
  }
};
