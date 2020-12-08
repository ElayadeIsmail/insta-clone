import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentProfile, updateProfile } from '../../redux/profile/actions';
import EditPage from './EditPage';

const EditProfileWithSpinner = ({
  profile: { currentProfile, currentProfileLoading },
  updateProfile,
  getCurrentProfile,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return (
    <EditPage
      isLoading={currentProfileLoading}
      profile={currentProfile}
      updateProfile={updateProfile}
    />
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
const mapDispatchToProps = {
  getCurrentProfile,

  updateProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileWithSpinner);
