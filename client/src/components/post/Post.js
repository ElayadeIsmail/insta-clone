import React, { useState } from 'react';
import { Container, ImageContainer, Image } from './post.style';
import Modal from '../modal/Modal';
import PostInfoComponent from './post-info/PostInfo';

function Post({ post, transitionDelay }) {
  const [modalPost, setModalPost] = useState(null);

  return (
    <Container layout whileHover={{ opacity: 1 }} s>
      <ImageContainer onClick={() => setModalPost(post)}>
        <Image
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: transitionDelay }}
          src={post.image}
          alt='photo'
        />
      </ImageContainer>
      <PostInfoComponent post={post} />
      {modalPost && <Modal id={modalPost.id} setPost={setModalPost} />}
    </Container>
  );
}

export default Post;
