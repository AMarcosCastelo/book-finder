import React from 'react';
import Cards from '../Cards';
import { VolumeInfo } from '../../App';

import { Container } from './styles';

interface Props {
  booksData: VolumeInfo[]
};

const Main: React.FC<Props> = ({booksData})=> {

  return (
    <Container>
      {
        booksData.map((book, index) => <Cards book={book} key={index} />)
      }
    </Container>
  );
}

export default Main;