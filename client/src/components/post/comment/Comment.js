import React from 'react';
import {
  CommentBody,
  CommentContainer,
  CommentText,
  UserImage,
  Username,
} from './comment.style';

const Comment = ({ comment: { user, body } }) => {
  return (
    <CommentContainer>
      <UserImage src={user.profilePhoto} />
      <CommentBody>
        <Username>{user.username}</Username>
        <CommentText>{body}</CommentText>
      </CommentBody>
    </CommentContainer>
  );
};

export default Comment;
