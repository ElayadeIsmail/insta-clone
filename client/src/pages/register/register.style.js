import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  text-align: center;
  color: ${colors.primary};
  margin: 0 auto 0.7rem auto;
`;

export const FormContainer = styled.div`
  width: 350px;
  background: ${colors.white};
  padding: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const SignInContainer = styled.div`
  font-size: 18px;
  background-color: ${colors.white};
  width: 350px;
  text-align: center;
  color: ${colors.dark};
  padding: 1rem 12px;
`;

export const SignInLink = styled(Link)`
  text-decoration: none;
  color: ${colors.primary};
  cursor: pointer;
`;
