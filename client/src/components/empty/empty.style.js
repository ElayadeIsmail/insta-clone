import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;
export const Text = styled.h5`
  color: ${colors.primary};
  text-transform: uppercase;
`;
