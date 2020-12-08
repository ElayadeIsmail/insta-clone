import React from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
import colors from '../../config/colors';
import ErrorMessage from './ErrorMessage';

function FormField({ name, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();
  const handleChange = (e) => {
    setFieldValue(name, e.target.value);
  };
  return (
    <FormFieldContainer>
      <Input
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </FormFieldContainer>
  );
}

const Input = styled.input`
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

const FormFieldContainer = styled.div`
  margin-bottom: 0.9rem;
`;

export default FormField;
