import styled from 'styled-components';
import colors from '../../config/colors';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${colors.light};
`;

export const Title = styled.h2`
  color: ${colors.primary};
  text-align: center;
  margin: 1rem auto;
`;
export const FormContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 8px;
  background: ${colors.white};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled(Link)`
  background: ${colors.secondary};
  color: #444;
  padding: 8px 12px;
  border-radius: 8px;
  outline: none;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
`;
