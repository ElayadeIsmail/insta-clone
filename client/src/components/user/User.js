import React from 'react';
import { Container, Image, Username, LinkToProfile } from './user.style';

const User = ({ user }) => {
  return (
    <Container>
      <Image src={user.profilePhoto} />
      <Username>{user.username}</Username>
      <LinkToProfile to={`/profile/${user.id}`}>See Profile</LinkToProfile>
    </Container>
  );
};

export default User;
