import React, { createRef, useEffect, useState } from 'react';
import {
  Container,
  Content,
  Image,
  PostInfoSection,
  FormComment,
  FormInput,
  FormButton,
  CommentsContainer,
} from './modal.style';
import PostInfoComponent from '../post/post-info/PostInfo';
import colors from '../../config/colors';
import CommentComponent from '../post/comment/Comment';
import { connect } from 'react-redux';
import { addComment } from '../../redux/posts/actions';
import EmptyContent from '../empty/EmptyContent';
import Spinner from '../spinner/Spinner';

const Modal = ({ post, setPost, addComment }) => {
  const [comment, setComment] = useState('');
  const CommentsEnd = createRef();
  const scrollToBottom = () => {
    if (!CommentsEnd.current) return;
    CommentsEnd.current.scrollTop = CommentsEnd.current.scrollHeight;
  };
  useEffect(() => {
    scrollToBottom();
  }, [CommentsEnd]);
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setPost(null);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') return;
    addComment(post.id, comment);
    setComment('');
  };
  return (
    <Container
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='backdrop'
    >
      {!post ? (
        <Spinner />
      ) : (
        <Content initial={{ y: '-100vh' }} animate={{ y: 0 }}>
          <Image image={post.image} />
          <PostInfoSection>
            <PostInfoComponent
              padding='1rem .5rem'
              post={post}
              background={colors.light}
              showIcons={false}
            />
            {post.comments.length === 0 ? (
              <EmptyContent text='There is no comments' />
            ) : (
              <CommentsContainer ref={CommentsEnd}>
                {post.comments.map((comment) => (
                  <CommentComponent key={comment._id} comment={comment} />
                ))}
              </CommentsContainer>
            )}
            <FormComment onSubmit={onSubmit}>
              <FormInput
                type='text'
                placeholder='Comment ...'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <FormButton type='submit'>Submit</FormButton>
            </FormComment>
          </PostInfoSection>
        </Content>
      )}
    </Container>
  );
};

const mapDispatchToProps = {
  addComment,
};

const mapStateToProps = (state, ownProps) => ({
  post: state.posts.posts.filter((post) => post.id === ownProps.id)[0],
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
