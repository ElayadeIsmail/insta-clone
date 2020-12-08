import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearProfile, getProfileByUserId } from '../../redux/profile/actions';
import { addPost, getPosts } from '../../redux/posts/actions';
import ProfilePage from './ProfilePage';
const ProfilePageWithSpinner = ({
  profile: { isLoading, profile },
  getProfileByUserId,
  addPost,
  getPosts,
  clearProfile,
}) => {
  let { userId } = useParams();
  useEffect(() => {
    getProfileByUserId(userId);
    getPosts();
    return () => clearProfile();
  }, [userId]);
  return (
    <ProfilePage isLoading={isLoading} profile={profile} addPost={addPost} />
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = {
  getProfileByUserId,
  addPost,
  clearProfile,
  getPosts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePageWithSpinner);
