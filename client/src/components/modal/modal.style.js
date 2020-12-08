import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../../config/colors';

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled(motion.div)`
  border-radius: 20px;
  width: 700px;
  height: 600px;
  background: #fff;
  display: flex;
`;

export const Image = styled.div`
  width: 400px;
  height: 600px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 0;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const PostInfoSection = styled.div`
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const CommentsContainer = styled.div`
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  margin-bottom: 70px;
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  & div:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const FormComment = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100%;
  padding: 0.7rem;
  background: ${colors.light};
  border-bottom-right-radius: 20px;
`;

export const FormInput = styled.input`
  flex: 1;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid ${colors.primary};
  background: ${colors.white};
  margin-right: 0.5rem;
  &:focus {
    outline: 0;
    border: 1px solid ${colors.primary};
  }
`;

export const FormButton = styled.button`
  padding: 12px;
  border-radius: 12px;
  background: ${colors.primary};
  color: ${colors.white};
  cursor: pointer;
  border: 0;
  &:focus {
    outline: 0;
    border: 0;
  }
`;

export const EmptyDiv = styled.div`
  display: none;
`;
