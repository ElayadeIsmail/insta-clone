import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../redux/profile/actions';
import Users from './Users';

const UsersWithSpinner = ({ getAllUsers, users }) => {
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);
  return <Users isLoading={users.length === 0} users={users} />;
};

const mapStateToProps = ({ profile }) => ({
  users: profile.users,
});

const mapDispatchToProps = {
  getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersWithSpinner);
