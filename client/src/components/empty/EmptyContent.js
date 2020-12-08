import React from 'react';
import { Container, Image, Text } from './empty.style';
import empty from '../../assets/not-found.png';

const EmptyContent = ({ text }) => {
  return (
    <Container>
      <Image src={empty} />
      <Text>{text}</Text>
    </Container>
  );
};

export default EmptyContent;
