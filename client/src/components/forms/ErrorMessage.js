import React from 'react';
import styled from 'styled-components';
import colors from '../../config/colors';

export default function ErrorMessage({ error, visible, ...otherProps }) {
  if (!visible || !error) return null;
  return <Error {...otherProps}>{error}</Error>;
}

const Error = styled.span`
  display: block;
  width: 100%;
  padding: ${(props) => props.padding ?? '0.2rem 0.4rem 0 0.4rem'};
  color: ${colors.danger};
  font-size: ${(props) => props.fontSize ?? '14px'};
  margin: ${(props) => props.margin ?? '0'};
  text-align: ${(props) => props.textAlign ?? 'left'};
`;
