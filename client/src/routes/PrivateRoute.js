import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import WithSpinner from '../components/spinner/WithSpinner';

function PrivateRoute({
  component: Component,
  auth: { isAuthenticated, isLoading },
  ...rest
}) {
  const WithSpinnerComponent = WithSpinner(Component);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !isLoading ? (
          <Redirect to='/' />
        ) : (
          <WithSpinnerComponent isLoading={isLoading} {...props} />
        )
      }
    />
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
