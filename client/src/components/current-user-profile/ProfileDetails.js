import React from 'react';
import {
  Container,
  LogoContainer,
  LogoIcon,
  LogoImage,
  NavLinksContainer,
  StyledLink,
  HomeIcon,
  UserIcon,
  ComposeIcon,
  LogoutIcon,
  Button,
  EditIcon,
  DeleteIcon,
} from './profileDetails.style';
import UserInfo from './userInfo/UserInfo';
import { logout, deleteUser } from '../../redux/auth/actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import colors from '../../config/colors';
import logo from '../../assets/instagram_logo.png';

function ProfileDetails({ auth: { user }, logout, deleteUser }) {
  const history = useHistory();
  const handleLogout = () => {
    logout();
    history.push('/');
  };
  const handleDelete = () => {
    deleteUser();
    history.push('/');
  };
  return (
    <Container>
      {!user ? (
        <Spinner background={colors.light} />
      ) : (
        <>
          <LogoContainer>
            <LogoIcon />
            <LogoImage src={logo} alt='Logo' />
          </LogoContainer>
          <UserInfo user={user} />
          <NavLinksContainer>
            <StyledLink to='/home' exact>
              <HomeIcon /> Home
            </StyledLink>
            <StyledLink to={`/profile/${user._id}`} exact>
              <UserIcon /> Profile
            </StyledLink>
            <StyledLink to='/users' exact>
              <ComposeIcon /> Explore
            </StyledLink>
            <StyledLink to='/edit' exact>
              <EditIcon /> Edit
            </StyledLink>
            <Button
              color={colors.dark}
              background='transparent'
              onClick={handleLogout}
            >
              <LogoutIcon /> Logout
            </Button>
          </NavLinksContainer>
          <Button
            color={colors.white}
            background={colors.danger}
            margin='1rem'
            onClick={handleDelete}
          >
            <DeleteIcon /> Delete Account
          </Button>
        </>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  logout,
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
