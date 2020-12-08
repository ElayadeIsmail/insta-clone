import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const Title = styled.h2`
  margin: 1.5rem 0;
  color: ${colors.dark};
  background: linear-gradient(
    140deg,
    ${colors.gradient[0]},
    ${colors.gradient[1]}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Grid = styled.div`
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
