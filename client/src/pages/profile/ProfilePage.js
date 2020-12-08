import React, { useState } from 'react';
import Profile from '../../components/profile/Profile';
import Post from '../../components/post/Post';
import {
  Grid,
  PostsContainer,
  Title,
  HeaderContainer,
  FileInput,
  PlusIcon,
} from './Profilepage.style';
import Button from '../../components/forms/Button';
import ProgressBar from '../../components/progress-bar/ProgressBar';
import WithSpinner from '../../components/spinner/WithSpinner';
import EmptyContent from '../../components/empty/EmptyContent';
import NotFoundComponent from '../../components/not-found/NotFoundComponent';

const ProfilePage = ({ addPost, profile }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleChange = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = async () => {
      setUploading(true);
      addPost(reader.result, { setProgress, setUploading });
      setProgress(20);
    };
    reader.readAsDataURL(file);
  };
  const displayUploadButton = () => {
    if (!profile.isCurrentUserProfile) return null;

    return (
      <Button disabled={uploading} width='auto' margin='0'>
        {uploading ? (
          'uploading..'
        ) : (
          <>
            <FileInput
              onChange={handleChange}
              type='file'
              accept='image/png,image/jpeg,image/jpg'
            />
            <PlusIcon /> Add picture
          </>
        )}
      </Button>
    );
  };
  return (
    <>
      {!profile ? (
        <NotFoundComponent />
      ) : (
        <>
          <Profile />
          <PostsContainer>
            <HeaderContainer>
              <Title>Feed</Title>
              {displayUploadButton()}
            </HeaderContainer>
            {profile.isCurrentUserProfile && uploading && (
              <ProgressBar width={`${progress}%`} />
            )}
            {profile.posts.length === 0 ? (
              <EmptyContent text='This User has No post' />
            ) : (
              <Grid>
                {profile.posts.map((post) => (
                  <Post key={post.id} post={post} transitionDelay={1} />
                ))}
              </Grid>
            )}
          </PostsContainer>
        </>
      )}
    </>
  );
};

export default WithSpinner(ProfilePage);
