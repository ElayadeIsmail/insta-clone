import styled from 'styled-components';
import colors from '../../../config/colors';

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const UserImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
`;

export const CommentBody = styled.div`
  background: ${colors.light};
  padding: 0.5rem 1rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Username = styled.h5`
  color: ${colors.primary};
  font-weight: bold;
  margin-bottom: 0.2rem;
`;
export const CommentText = styled.p`
  color: ${colors.dark};
  line-height: 1.3;
  font-size: 16px;
`;
