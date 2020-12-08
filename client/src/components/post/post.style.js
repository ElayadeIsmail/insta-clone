import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 265px;
  height: 320px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export const ImageContainer = styled.div`
  width: 265px;
  height: 270px;
  border-radius: 6px;
`;

export const Image = styled(motion.img)`
  width: 265px;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px;
  object-position: center center;
  cursor: pointer;
`;
