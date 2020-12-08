import React from 'react';
import numberFormatter from '../../../config/numberFormat';
import {
  ContentDetailsContainer,
  ImageContainerOuter,
  ImageContainerInner,
  ProfileImage,
  Username,
  UserDetails,
  LinesContainer,
  Tagline,
  SubTagLine,
} from './userInfo.style';

export default function UserInfo({
  user: { username, profilePhoto, followers, following, posts },
}) {
  return (
    <ContentDetailsContainer>
      <ImageContainerOuter>
        <ImageContainerInner>
          <ProfileImage src={profilePhoto} alt='profile pic' />
        </ImageContainerInner>
      </ImageContainerOuter>
      <Username>{username}</Username>
      <UserDetails>
        <LinesContainer>
          <Tagline>{numberFormatter(posts)}</Tagline>
          <SubTagLine>Posts</SubTagLine>
        </LinesContainer>
        <LinesContainer>
          <Tagline>{numberFormatter(followers)}</Tagline>
          <SubTagLine>Followers</SubTagLine>
        </LinesContainer>
        <LinesContainer>
          <Tagline>{numberFormatter(following)}</Tagline>
          <SubTagLine>Following</SubTagLine>
        </LinesContainer>
      </UserDetails>
    </ContentDetailsContainer>
  );
}
