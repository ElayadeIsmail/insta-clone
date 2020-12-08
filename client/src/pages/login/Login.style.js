import styled from 'styled-components';
import colors from '../../config/colors';
import background from '../../assets/background.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.light};
  display: flex;
`;

export const Title = styled.h2`
  text-align: center;
  color: ${colors.primary};
  margin: 0 auto 0.7rem auto;
`;

export const BackgroundImage = styled(motion.div)`
  width: 50%;
  height: 100vh;
  background-image: url(${background});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const ContentContainer = styled.div`
  width: 50%;
  height: 100vh;
  background: ${colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 51px;
  margin-bottom: 0.5rem;
`;

export const Logo = styled.img`
  width: 175px;
  height: auto;
  padding: 1rem;
`;

export const FormContainer = styled.div`
  width: 350px;
  background: ${colors.white};
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const SignUpContainer = styled.div`
  font-size: 18px;
  background-color: ${colors.white};
  width: 350px;
  text-align: center;
  color: ${colors.dark};
  padding: 1rem 12px;
`;

export const SignUpLink = styled(Link)`
  text-decoration: none;
  color: ${colors.primary};
  cursor: pointer;
`;
