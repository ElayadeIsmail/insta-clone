const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validator');
const postValidateRules = require('../../helpers/post-validator-rules');
const postPost = require('./post-post');
const getAllPosts = require('./get-all-posts');
const getAllPostsByUser = require('./get-all-posts-by-user');
const getPostById = require('./get-post-by-id');
const deletePost = require('./delete-post');
const handleLikePost = require('./handle-like-post');
const commentValidatorRules = require('../../helpers/comment-validator-rules');
const postComment = require('./post-comment');
const deleteComment = require('./delete-comment');

router.get('/', auth, getAllPosts);

router.post('/post', auth, postValidateRules(), validate, postPost);

router.get('/user/:user_id', auth, getAllPostsByUser);

router.get('/post/:post_id', auth, getPostById);

router.put('/post/like/:post_id', auth, handleLikePost);

router.post(
  '/comment/:post_id',
  auth,
  commentValidatorRules(),
  validate,
  postComment
);

router.delete('/comment/:post_id/:comment_id', auth, deleteComment);

router.delete('/:post_id', auth, deletePost);

module.exports = router;
