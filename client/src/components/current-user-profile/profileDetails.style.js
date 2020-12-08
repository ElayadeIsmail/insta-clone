import styled from 'styled-components';
import colors from '../../config/colors';
import { FaInstagram, FaTrashAlt } from 'react-icons/fa';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCompass,
  AiOutlineEdit,
} from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 25%;
  height: 100vh;
  background: ${colors.light};
  color: ${colors.dark};
  padding: 1rem 2.5rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    width: 20%;
    padding: 1rem;
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  display: flex;
  margin: 1rem auto 2rem auto;
`;

export const LogoIcon = styled(FaInstagram)`
  font-size: 30px;
  margin-right: 0.5rem;
`;

export const LogoImage = styled.img`
  width: 100px;
  height: 35px;
  object-fit: contain;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

export const HomeIcon = styled(AiOutlineHome)`
  font-size: 30px;
  margin-right: 2rem;
`;
export const UserIcon = styled(AiOutlineUser)`
  font-size: 30px;
  margin-right: 2rem;
`;
export const ComposeIcon = styled(AiOutlineCompass)`
  font-size: 30px;
  margin-right: 2rem;
`;
export const LogoutIcon = styled(FiLogOut)`
  font-size: 25px;
  margin-right: 2rem;
`;
export const EditIcon = styled(AiOutlineEdit)`
  font-size: 25px;
  margin-right: 2rem;
`;

export const DeleteIcon = styled(FaTrashAlt)`
  font-size: 22px;
  margin-right: 2rem;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 18px;
  padding: 5px;
  margin-bottom: 0.7rem;
  font-weight: 500;
  color: ${colors.dark};
  text-decoration: none;
  &.active {
    color: ${colors.primary};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 16px;
  padding: 8px 10px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  margin-bottom: ${(props) => props.margin ?? '0'};
  &:focus {
    outline: none;
    border: 0;
  }
`;
