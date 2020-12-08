import React from 'react';
import { logout, deleteUser } from '../../redux/auth/actions';
import { connect } from 'react-redux';
import ProfileDetails from './ProfileDetails';

const ProfileDetailsWithSpinner = ({
  auth: { isLoading, user },
  logout,
  deleteUser,
}) => (
  <ProfileDetails
    isLoading={!user && isLoading}
    user={user}
    deleteUser={deleteUser}
    logout={logout}
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  logout,
  deleteUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDetailsWithSpinner);
