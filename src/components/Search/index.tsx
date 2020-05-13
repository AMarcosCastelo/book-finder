import React, { useState } from 'react';
import { Container, SearchContainer, Title, Input } from './styles';

interface Props {
  getData(value: string): Promise<void> 
};

const Search: React.FC<Props> = ({getData}) => {
  const [value, setValue] = useState('');

  function handleSearch (event: React.KeyboardEvent): void {
    if (event.key === 'Enter') {
      getData(value);
    };
  };

  return (
    <Container>
      <SearchContainer>
        <Title>Go ahead, look for a book or author.</Title>
        <Input 
          type="text" 
          placeholder="Search" 
          onKeyDown={handleSearch} 
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
      </SearchContainer>
    </Container>
  );
}

export default Search;
