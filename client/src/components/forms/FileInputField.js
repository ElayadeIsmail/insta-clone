import React, { useState } from 'react';
import styled from 'styled-components';

import { BsPencil } from 'react-icons/bs';

import avatar from '../../assets/avatar.png';
import colors from '../../config/colors';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

export default function FileInputField({ name, image = avatar }) {
  const {
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
  } = useFormikContext();
  const [preview, setPreview] = useState(image);
  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result);
        setFieldValue(name, reader.result);
      }
    };
    file && reader.readAsDataURL(file);
  };
  return (
    <Container>
      <PhotoContainer>
        <Label>
          <Input
            onBlur={() => setFieldTouched(name)}
            type='file'
            accept='image/png,image/jpeg'
            onChange={handleChange}
          />
          <Icon />
        </Label>
        <AvatarPreview>
          <AvatarPreviewImage background={preview} />
        </AvatarPreview>
      </PhotoContainer>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.9rem;
`;

const PhotoContainer = styled.div`
  position: relative;
  max-width: 250px;
`;

const Label = styled.label`
  position: absolute;
  right: 12px;
  z-index: 1;
  top: 10px;

  display: inline-block;
  width: 34px;
  height: 34px;
  margin-bottom: 0;
  border-radius: 100%;
  background: #ffffff;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  font-weight: normal;
  transition: all 0.2s ease-in-out;

  :hover {
    background: #f1f1f1;
    border-color: #d6d6d6;
  }
`;

const Icon = styled(BsPencil)`
  color: #757575;
  text-align: center;
  margin: auto;
  font-size: 24px;
`;

const Input = styled.input`
  display: none;
`;

const AvatarPreview = styled.div`
  width: 192px;
  height: 192px;
  position: relative;
  border-radius: 100%;
  border: 6px solid ${colors.light};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;

const AvatarPreviewImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
