import React from 'react';
import colors from '../../config/colors';
import styled from 'styled-components';
import notfound from '../../assets/not-found.png';

const NotFoundComponent = () => {
  return (
    <Container>
      <Image src={notfound} alt='not-found' />
      <Text>Sorry This User Doesn't Exist</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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

export default NotFoundComponent;
