import React from 'react';
import { connect } from 'react-redux';
import RelativeTime from 'react-relative-time';
import { handleLike } from '../../../redux/posts/actions';
import numberFormatter from '../../../config/numberFormat';
import {
  PostInfo,
  PostOwner,
  PostOwnerImg,
  PostOwnerName,
  IconsContainer,
  IconContainer,
  LikedIcon,
  Time,
  CommentedIcon,
} from './post-info.style';
import colors from '../../../config/colors';

const PostInfoComponent = ({
  post,
  handleLike,
  background = '#FFF',
  padding = '0',
  showIcons = true,
}) => {
  const { user, likes, comments, isLiked, date } = post;
  return (
    <PostInfo background={background} padding={padding}>
      <PostOwner to={`/profile/${user.id}`}>
        <PostOwnerImg src={user.profilePhoto} alt='photo' />
        <PostOwnerName>{user.username}</PostOwnerName>
      </PostOwner>
      {showIcons ? (
        <IconsContainer>
          <IconContainer>
            <LikedIcon
              color={isLiked ? colors.danger : '#ccc'}
              onClick={() => handleLike(post.id)}
            />{' '}
            {numberFormatter(likes.length)}
          </IconContainer>
          <IconContainer>
            <CommentedIcon />
            {numberFormatter(comments.length)}
          </IconContainer>
        </IconsContainer>
      ) : (
        <Time>
          <RelativeTime value={date} titleformat='iso8601' />
        </Time>
      )}
    </PostInfo>
  );
};

const mapDispatchToProps = {
  handleLike,
};

export default connect(null, mapDispatchToProps)(PostInfoComponent);
