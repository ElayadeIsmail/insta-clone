const handleRemoveAccount = require('../../helpers/handleRemoveAccount');

module.exports = async (req, res, next) => {
  try {
    await handleRemoveAccount(req.currentUser.id);
    res.json([{ message: 'Account Deleted Successful' }]);
  } catch (error) {
    next(error);
  }
};
