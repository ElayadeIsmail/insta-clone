import React from 'react';
import styled from 'styled-components';
import colors from '../../config/colors';
import { motion } from 'framer-motion';

const ProgressBar = ({ width }) => {
  return (
    <Container initial={{ width: 0 }} animate={{ width: width }}></Container>
  );
};

const Container = styled(motion.div)`
  /* width: ${(props) => props.width}; */
  padding-top: 10px;
  margin-bottom: 1rem;
  border-radius: 4px;
  background: ${colors.primary};
  background: linear-gradient(
    140deg,
    ${colors.gradient[0]},
    ${colors.gradient[1]}
  );
`;

export default ProgressBar;
