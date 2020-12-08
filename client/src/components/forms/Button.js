import React from 'react';
import styled from 'styled-components';
import colors from '../../config/colors';

export default function AppButton({ children, ...otherProps }) {
  return <Button {...otherProps}>{children}</Button>;
}

const Button = styled.button`
  display: inline-block;
  width: ${(props) => props.width ?? '100%'};
  margin: ${(props) => props.margin ?? '0.7rem 0 0 0'};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  position: relative;
  background: ${colors.primary};
  transition: all 0.1s ease-in-out;
  background: linear-gradient(
    140deg,
    ${colors.gradient[0]},
    ${colors.gradient[1]}
  );
  color: ${colors.white};
  font-size: 18px;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;
