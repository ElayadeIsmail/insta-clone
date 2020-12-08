import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components';
import colors from '../config/colors';
import ProfilePageWithSpinner from '../pages/profile/ProfilePageWithSpinner';
import HomePageWithSpinner from '../pages/home/HomePageWithSpinner';
import UsersWithSpinner from '../pages/users/UsersWithSpinner';
import EditProfileWithSpinner from '../pages/edit/EditProfileWithSpinner';
import ProfileDetails from '../components/current-user-profile/ProfileDetails';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <Container>
      <ProfileDetails />
      <ContentContainer>
        <Switch>
          <PrivateRoute exact path='/home' component={HomePageWithSpinner} />
          <PrivateRoute
            exact
            path='/profile/:userId'
            component={ProfilePageWithSpinner}
          />
          <PrivateRoute exact path='/users' component={UsersWithSpinner} />
          <PrivateRoute exact path='/edit' component={EditProfileWithSpinner} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 1280px;
  margin: 0 auto;
  @media (max-width: 1100px) {
    width: 1000px;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  margin-left: 25%;
  display: flex;
  width: 75%;
  background: ${colors.white};
  height: 100vh;
`;

export default Routes;
