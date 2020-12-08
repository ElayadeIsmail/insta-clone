import React from 'react';
import RegisterPage from './RegisterPage';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/auth/actions';

const RegisterPageWithSpinner = ({
  auth: { isAuthenticated, isLoading, error },
  registerUser,
}) => (
  <RegisterPage
    isLoading={isLoading}
    isAuthenticated={isAuthenticated}
    error={error}
    registerUser={registerUser}
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { registerUser })(
  RegisterPageWithSpinner
);
