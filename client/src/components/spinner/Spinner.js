import React from 'react';
import {
  SpinnerContainer,
  SpinnerContent,
  SpinnerInner,
} from './spinner.style';

const Spinner = ({ background }) => {
  return (
    <SpinnerContainer background={background}>
      <SpinnerContent>
        <SpinnerInner />
      </SpinnerContent>
    </SpinnerContainer>
  );
};

export default Spinner;
