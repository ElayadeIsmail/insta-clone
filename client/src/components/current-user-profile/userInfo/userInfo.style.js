import styled from 'styled-components';
import colors from '../../../config/colors';

export const ContentDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ImageContainerOuter = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 1rem auto;
  border-radius: 100%;
  background: linear-gradient(
    140deg,
    ${colors.gradient[0]},
    ${colors.gradient[1]}
  );
  padding: 3px;
`;
export const ImageContainerInner = styled.div`
  display: inline-block;
  padding: 0.4rem;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  background: ${colors.light};
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`;

export const Username = styled.h2`
  text-align: center;
  margin: 0 auto 1.5rem auto;
  color: ${colors.dark};
  background: linear-gradient(
    140deg,
    ${colors.gradient[0]},
    ${colors.gradient[1]}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

export const LinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Tagline = styled.h3`
  color: ${colors.dark};
  font-weight: 600;
`;

export const SubTagLine = styled.p`
  color: ${colors.medium};
  font-size: 1rem;
`;
