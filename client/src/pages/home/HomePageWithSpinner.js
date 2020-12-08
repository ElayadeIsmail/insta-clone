import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { getPosts } from '../../redux/posts/actions';
import Homepage from './Homepage';

const HomePageWithSpinner = ({ getPosts, posts: { isLoading, posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return <Homepage isLoading={isLoading} posts={posts} />;
};

const mapStateToProps = ({ posts }) => ({
  posts: posts,
});

const mapDispatchToProps = {
  getPosts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageWithSpinner);
