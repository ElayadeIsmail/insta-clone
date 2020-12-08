import React, { useState } from 'react';
import {
  Container,
  FormContainer,
  SignInContainer,
  SignInLink,
  Title,
} from './register.style';
import Form from '../../components/forms/Form';
import FormField from '../../components/forms/FormField';
import FileInputField from '../../components/forms/FileInputField';
import Button from '../../components/forms/Button';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';

import ErrorMessage from '../../components/forms/ErrorMessage';
import WithSpinner from '../../components/spinner/WithSpinner';

const validateSchema = Yup.object().shape({
  profilePhoto: Yup.string().required().label('Profile Image'),
  username: Yup.string().required().min(4).max(16).label('Username'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).max(20).label('Password'),
});

function RegisterPage({
  isAuthenticated,
  error: { registerError },
  registerUser,
}) {
  const [disabled, setDisabled] = useState(false);
  const onSubmit = ({ username, profilePhoto, email, password }) => {
    setDisabled(true);
    registerUser(username, profilePhoto, email, password, setDisabled);
  };
  if (isAuthenticated) {
    return <Redirect to='/edit' />;
  }
  return (
    <Container>
      <FormContainer>
        <Title>Sign Up</Title>
        <Form
          initialValues={{
            profilePhoto: '',
            username: '',
            email: '',
            password: '',
          }}
          onSubmit={onSubmit}
          validateSchema={validateSchema}
        >
          {registerError && (
            <ErrorMessage
              ontSize='18px'
              padding='0 0.5rem 0.5rem 0.5rem'
              textAlign='center'
              error={registerError}
              visible={true}
            />
          )}
          <FileInputField name='profilePhoto' />
          <FormField name='username' placeholder='username' type='text' />
          <FormField name='email' placeholder='Email' type='email' />
          <FormField name='password' placeholder='password' type='password' />
          <Button disabled={disabled} type='submit'>
            {disabled ? 'Loading ..' : 'Sign Up'}
          </Button>
        </Form>
      </FormContainer>
      <SignInContainer>
        Already have an account? <SignInLink to='/'>Sign In</SignInLink>
      </SignInContainer>
    </Container>
  );
}

export default WithSpinner(RegisterPage);
