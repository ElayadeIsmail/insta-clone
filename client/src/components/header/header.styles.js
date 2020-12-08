import { FaSearch } from 'react-icons/fa';

import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchBarForm = styled.form`
  width: 300px;
  height: 40px;
  padding: 6px;
  display: flex;
  border-radius: 6px;
  align-items: center;
  background: ${colors.light};
  color: ${colors.medium};
`;

export const SearchIcon = styled(FaSearch)`
  font-size: 25px;
  margin: auto 0.7rem;
  opacity: 0.6;
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  height: 100%;
  background: inherit;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background: inherit;
  border: 0;
  font-size: 18px;
  color: ${colors.dark};
  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  display: none;
`;

// export const UploadInput = styled.div`
//   padding: 6px 12px;
//   background: linear-gradient(
//     140deg,
//     ${colors.gradient[0]},
//     ${colors.gradient[1]}
//   );
//   border-radius: 6px;
//   color: ${colors.light};
//   display: flex;
//   align-items: center;
//   font-size: 18px;
//   font-weight: 600;
//   position: relative;
// `;
