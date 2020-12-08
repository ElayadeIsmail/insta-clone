import React from 'react';
import Post from '../../components/post/Post';
import { Grid, Container, Title } from './homepage.style';
import Header from '../../components/header/Header';
import WithSpinner from '../../components/spinner/WithSpinner';

const Homepage = ({ posts }) => {
  return (
    <Container>
      <Header />
      <Title>Feed</Title>

      <Grid>
        {posts.map((post) => (
          <Post key={post.id} post={post} transitionDelay={0.5} />
        ))}
      </Grid>
    </Container>
  );
};

export default WithSpinner(Homepage);
