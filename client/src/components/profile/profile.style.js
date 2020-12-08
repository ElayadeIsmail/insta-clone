import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../config/colors';
import { MdKeyboardBackspace, MdLocationOn } from 'react-icons/md';
import Button from '../forms/Button';

export const Container = styled.div`
  width: 30%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 1rem 3rem;
  background: #fafafa;
`;

export const BackLink = styled(Link)`
  color: ${colors.primary};
  font-size: 18px;
  margin: 1rem 0;
  display: flex;
  font-weight: 500;
  align-items: center;
  text-decoration: none;
`;

export const BackIcon = styled(MdKeyboardBackspace)`
  color: ${colors.medium};
  font-size: 25px;
  margin-right: 0.5rem;
`;

export const LocationIcon = styled(MdLocationOn)`
  color: ${colors.medium};
  font-size: 25px;
  margin-right: 0.5rem;
`;

export const ImageContainer = styled.img`
  width: 95%;
  height: 250px;
  object-fit: cover;
  object-position: center center;
  border-radius: 6px;
  margin: 0.5rem auto;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export const Username = styled.h2`
  text-align: center;
  margin: 0 auto 0.5rem auto;
  color: ${colors.dark};
  background: linear-gradient(
    140deg,
    ${colors.gradient[0]},
    ${colors.gradient[1]}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: ${(props) =>
    props.isCurrentUserProfile ? '1rem 0 2rem 0' : '0 0 .4rem 0'};
`;

export const LinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Tagline = styled.h3`
  color: ${colors.dark};
  font-weight: 600;
`;

export const SubTagLine = styled.p`
  color: ${colors.medium};
  font-size: 1rem;
  /* opacity: 0.6; */
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.4rem 0;
`;
export const InfoTagLine = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.dark};
  margin-bottom: 0.2rem;
`;

export const InfoText = styled.p`
  font-size: 16px;
  color: ${colors.medium};
  line-height: 1.3;
  display: flex;
  align-items: center;
`;

export const UnSubscribeButton = styled(Button)`
  box-sizing: border-box;
  -webkit-box-shadow: inset 0px 0px 0px 3px ${colors.primary};
  -moz-box-shadow: inset 0px 0px 0px 3px ${colors.primary};
  box-shadow: inset 0px 0px 0px 3px ${colors.primary};
  color: ${colors.primary};
  background: ${colors.light};
  transition: all 0.1s ease-in-out;
`;
