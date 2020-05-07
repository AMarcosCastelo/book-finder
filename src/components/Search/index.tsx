import React from 'react';
import { Container, SearchContainer, Title, Input } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <SearchContainer>
        <Title>Go ahead, look for a book or author.</Title>
        <Input type="text" placeholder="Search" />
      </SearchContainer>
    </Container>
  );
}

export default Search;
