import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { login } from '../../redux/auth/actions';

const LoginPageWithSpinner = ({
  auth: { isAuthenticated, isLoading, error },
  login,
}) => (
  <LoginPage
    isLoading={isLoading}
    isAuthenticated={isAuthenticated}
    error={error}
    login={login}
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(LoginPageWithSpinner);
