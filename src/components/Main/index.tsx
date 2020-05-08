import React from 'react';
import Cards from '../Cards';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </Container>
  );
}

export default Main;