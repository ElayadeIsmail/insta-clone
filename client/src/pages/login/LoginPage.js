import React, { useState } from 'react';
import Form from '../../components/forms/Form';
import FormField from '../../components/forms/FormField';
import {
  Container,
  Logo,
  FormContainer,
  LogoContainer,
  BackgroundImage,
  ContentContainer,
  SignUpContainer,
  SignUpLink,
  Title,
} from './Login.style';
import * as Yup from 'yup';
import Button from '../../components/forms/Button';
import ErrorMessage from '../../components/forms/ErrorMessage';
import { Redirect } from 'react-router-dom';
import WithSpinner from '../../components/spinner/WithSpinner';
import logo from '../../assets/instagram_logo.png';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).max(20).label('Password'),
});

function LoginPage({ isAuthenticated, error: { loginError }, login }) {
  const [disabled, setDisabled] = useState(false);
  const onSubmit = ({ email, password }, { resetForm }) => {
    setDisabled(true);
    login(email, password, setDisabled);
  };
  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }
  return (
    <Container>
      <BackgroundImage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
      <ContentContainer>
        <FormContainer>
          <LogoContainer>
            <Logo src={logo} alt='logo' />
          </LogoContainer>
          <Title>Sign In</Title>
          <Form
            initialValues={{ email: '', password: '' }}
            onSubmit={onSubmit}
            validateSchema={validationSchema}
          >
            {loginError && (
              <ErrorMessage
                fontSize='18px'
                padding='0 0.5rem 0.5rem 0.5rem'
                textAlign='center'
                error={loginError}
                visible={true}
              />
            )}
            <FormField type='email' name='email' placeholder='Email' />
            <FormField type='password' name='password' placeholder='Password' />
            <Button disabled={disabled} type='submit'>
              {disabled ? 'Loading..' : 'Login'}
            </Button>
          </Form>
        </FormContainer>
        <SignUpContainer>
          You don't have an account?{' '}
          <SignUpLink to='/register'>Sign Up</SignUpLink>
        </SignUpContainer>
      </ContentContainer>
    </Container>
  );
}

export default WithSpinner(LoginPage);
