import React, { useState } from 'react';
import {
  Container,
  SearchBarForm,
  SearchIcon,
  SearchInput,
  SearchInputContainer,
  SubmitButton,
} from './header.styles';

function Header() {
  const [search, setSearch] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <SearchBarForm onSubmit={onSubmit}>
        <SearchIcon />
        <SearchInputContainer>
          <SearchInput
            placeholder='Search'
            type='text'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </SearchInputContainer>
        <SubmitButton type='submit' />
      </SearchBarForm>
    </Container>
  );
}

export default Header;
