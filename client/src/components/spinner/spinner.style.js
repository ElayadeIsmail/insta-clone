import styled, { keyframes } from 'styled-components';
import colors from '../../config/colors';

const rotate = keyframes`
  from { 
    transform: translate(-50%,-50%) rotate(0deg); }

  to 
  { transform: translate(-50%,-50%) rotate(360deg) }
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${(props) => props.background ?? '#fff'};
`;

export const SpinnerContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;

export const SpinnerInner = styled.div`
  box-sizing: content-box;
  position: absolute;
  width: 50px;
  height: 50px;
  border: 5px solid ${colors.primary};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
