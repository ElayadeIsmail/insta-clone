import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.div`
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center center;
  border-radius: 12px;
  overflow: hidden;
`;

export const Username = styled.h2`
  text-align: center;
  margin: 0.5rem auto;
  color: ${colors.dark};
  background: linear-gradient(
    140deg,
    ${colors.gradient[0]},
    ${colors.gradient[1]}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LinkToProfile = styled(Link)`
  text-decoration: none;
  background: linear-gradient(140deg, ${colors.primary}, ${colors.secondary});
  color: ${colors.white};
  font-weight: bold;
  font-size: 18px;
  padding: 8px 12px;
  width: 100%;
  border-radius: 12px;
  text-align: center;
`;
