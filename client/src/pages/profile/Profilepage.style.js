import styled from 'styled-components';
import colors from '../../config/colors';
import { BiPlusMedical } from 'react-icons/bi';

export const PostsContainer = styled.div`
  width: 70%;
  margin-left: 40%;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: ${colors.dark};
  background: linear-gradient(
    140deg,
    ${colors.gradient[0]},
    ${colors.gradient[1]}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 3;
`;

export const PlusIcon = styled(BiPlusMedical)`
  font-size: 22px;
  margin: auto 0.5rem;
`;

export const Grid = styled.div`
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;
