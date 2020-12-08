const { cloudinary } = require('../config/cloudinary');
const { ErrorHandler } = require('./error');

module.exports = async (imageString) => {
  try {
    const { url } = await cloudinary.uploader.upload(imageString, {
      upload_preset: 'insta-clone',
    });
    return url;
  } catch (error) {
    console.log(error);
    throw new ErrorHandler(500, 'Opps Something went wrong');
  }
};
