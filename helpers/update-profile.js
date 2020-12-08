const uploadImg = require('./upload-img');

const updateProfile = async (req, user) => {
  let newUser = {};
  const { profilePhoto, username, about, activity, location } = req.body;
  const str = 'http://res.cloudinary.com/';
  if (!profilePhoto.includes(str)) {
    const url = await uploadImg(profilePhoto);
    newUser.profilePhoto = url;
  }
  if (user.username !== username) {
    newUser.username = username;
  }
  let newProfile = { about, activity, location };
  return { newUser, newProfile };
};

module.exports = updateProfile;
