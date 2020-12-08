import { FaComment, FaHeart } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import colors from '../../../config/colors';
import { Link } from 'react-router-dom';

const iconStyle = css`
  font-size: 24px;
  margin-right: 0.2rem;
  cursor: pointer;
`;

export const PostInfo = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};
  border-top-right-radius: 20px;
`;

export const PostOwner = styled(Link)`
  display: flex;
  padding: 10px 0;
  height: 100%;
  display: flex;
  align-items: center;
  width: auto;
  color: ${colors.dark};
  text-decoration: none;
  font-weight: 500;
`;

export const PostOwnerImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
`;

export const PostOwnerName = styled.p`
  font-size: 16px;
`;

export const IconsContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-left: 0.4rem;
`;
export const LikedIcon = styled(FaHeart)`
  ${iconStyle}
  color: ${(props) => props.color};
`;
export const CommentedIcon = styled(FaComment)`
  color: ${colors.secondary};
  ${iconStyle}
`;

export const Time = styled.h5`
  color: ${colors.primary};
`;
