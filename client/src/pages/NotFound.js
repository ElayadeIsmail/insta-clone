import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors';
import notfound from '../assets/notfound.png';
const NotFound = () => {
  return (
    <Container>
      <Image src={notfound} alt='svg' />
      <Text>This Page is Not on the Map</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center center;
  margin-bottom: 1rem;
`;

const Text = styled.h1`
  text-align: center;
  color: ${colors.danger};
`;

export default NotFound;
