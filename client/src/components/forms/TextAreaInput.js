import { useFormikContext } from 'formik';
import React from 'react';
import styled from 'styled-components';
import colors from '../../config/colors';
import ErrorMessage from './ErrorMessage';

const TextAreaInput = ({ name, ...otherProps }) => {
  const {
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <Container>
      <TextArea
        onBlur={() => setFieldTouched(name)}
        onChange={(e) => setFieldValue(name, e.target.value)}
        value={values[name]}
        rows='3'
        cols='33'
        name={name}
        {...otherProps}
      ></TextArea>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 0.9rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  background: ${colors.light};
  color: ${colors.dark};
  border: 1px solid #dedede;
  border-radius: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export default TextAreaInput;
