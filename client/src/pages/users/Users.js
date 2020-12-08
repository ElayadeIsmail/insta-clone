import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header/Header';
import User from '../../components/user/User';
import colors from '../../config/colors';
import WithSpinner from '../../components/spinner/WithSpinner';

const Users = ({ users }) => {
  return (
    <Container>
      <Header />
      <Title>Users</Title>
      <Grid>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: ${colors.primary};
  margin: 1.5rem 0;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

export default WithSpinner(Users);
