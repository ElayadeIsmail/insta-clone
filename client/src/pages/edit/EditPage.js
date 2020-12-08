import React, { useState } from 'react';
import {
  Container,
  Title,
  FormContainer,
  ButtonsContainer,
  BackButton,
} from './edit-page.style';
import * as Yup from 'yup';
import Form from '../../components/forms/Form';
import FileInputField from '../../components/forms/FileInputField';
import TextAreaInput from '../../components/forms/TextAreaInput';
import FormField from '../../components/forms/FormField';
import Button from '../../components/forms/Button';
import WithSpinner from '../../components/spinner/WithSpinner';
import { useHistory } from 'react-router-dom';

const validateSchema = Yup.object().shape({
  profilePhoto: Yup.string().required().label('Profile Image'),
  username: Yup.string().required().min(4).max(16).label('Username'),
  about: Yup.string().required().min(15).max(100).label('About Me'),
  activity: Yup.string().required().min(4).max(100).label('Activity'),
  location: Yup.string().required().min(5).max(50).label('Location'),
});

const EditPage = ({ profile, updateProfile }) => {
  let history = useHistory();
  const [disabled, setDisabled] = useState(false);
  const onSubmit = (values) => {
    setDisabled(true);
    updateProfile(values, setDisabled, history);
  };
  return (
    <Container>
      <FormContainer>
        <Title>Edit Profile</Title>
        <Form
          initialValues={{
            profilePhoto: profile.user.profilePhoto,
            username: profile.user.username,
            about: profile.about || '',
            location: profile.location || '',
            activity: profile.activity || '',
          }}
          onSubmit={onSubmit}
          validateSchema={validateSchema}
        >
          <FileInputField
            name='profilePhoto'
            image={profile.user.profilePhoto}
          />
          <FormField name='username' placeholder='username' type='text' />
          <FormField name='activity' placeholder='Activity' type='text' />
          <FormField name='location' placeholder='Location' type='text' />
          <TextAreaInput placeholder='Describe yourself here...' name='about' />
          <ButtonsContainer>
            <BackButton to='/home'>Go Back</BackButton>
            <Button disabled={disabled} type='submit' margin='0' width='auto'>
              {disabled ? 'Updating ..' : 'Submit'}
            </Button>
          </ButtonsContainer>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default WithSpinner(EditPage);
