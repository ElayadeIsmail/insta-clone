import { connect } from 'react-redux';
import React from 'react';
import numberFormatter from '../../config/numberFormat';
import Button from '../forms/Button';
import { updateFollowing } from '../../redux/profile/actions';
import {
  BackLink,
  Container,
  BackIcon,
  ImageContainer,
  Username,
  UserDetails,
  LinesContainer,
  Tagline,
  SubTagLine,
  ContentContainer,
  InfoContainer,
  InfoTagLine,
  InfoText,
  UnSubscribeButton,
  LocationIcon,
} from './profile.style';

const Profile = ({ profile, updateFollowing }) => {
  const {
    user,
    isCurrentUserProfile,
    posts,
    followers,
    isFollowing,
    following,
    about,
    activity,
    location,
  } = profile;
  const displaySubscribeButton = () =>
    isFollowing ? (
      <UnSubscribeButton
        margin='0.7rem'
        onClick={() => updateFollowing(user.id)}
      >
        UnSubscribe
      </UnSubscribeButton>
    ) : (
      <Button margin='0.7rem' onClick={() => updateFollowing(user.id)}>
        Subscribe
      </Button>
    );
  return (
    <Container>
      <BackLink to='/home'>
        <BackIcon /> Go Back
      </BackLink>
      <ImageContainer src={user.profilePhoto} alt='Sophie' />
      <ContentContainer>
        <Username>{user.username}</Username>
        <UserDetails isCurrentUserProfile={isCurrentUserProfile}>
          <LinesContainer>
            <Tagline>{numberFormatter(posts.length)}</Tagline>
            <SubTagLine>Posts</SubTagLine>
          </LinesContainer>
          <LinesContainer>
            <Tagline>{numberFormatter(followers.length)}</Tagline>
            <SubTagLine>Followers</SubTagLine>
          </LinesContainer>
          <LinesContainer>
            <Tagline>{numberFormatter(following.length)}</Tagline>
            <SubTagLine>Following</SubTagLine>
          </LinesContainer>
        </UserDetails>
        {!isCurrentUserProfile && displaySubscribeButton()}
        <InfoContainer>
          <InfoTagLine>About Me</InfoTagLine>
          <InfoText>{about || 'is Typing'}</InfoText>
        </InfoContainer>
        <InfoContainer>
          <InfoTagLine>Activity</InfoTagLine>
          <InfoText>{activity || 'is Typing'}</InfoText>
        </InfoContainer>
        <InfoContainer>
          <InfoTagLine>Location</InfoTagLine>
          <InfoText>
            <LocationIcon />
            {location || 'is Typing'}
          </InfoText>
        </InfoContainer>
      </ContentContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  user: state.auth.user,
});

const mapDispatchToProps = {
  updateFollowing,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
