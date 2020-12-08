const uploadImg = require('../../helpers/upload-img');
const Post = require('../../model/Post');

module.exports = async (req, res, next) => {
  try {
    const { image } = req.body;
    const url = await uploadImg(image);
    const newPost = new Post({
      user: req.currentUser.id,
      image: url,
    });
    await newPost.save();
    res.status(201).send(newPost);
  } catch (error) {
    next(error);
  }
};
