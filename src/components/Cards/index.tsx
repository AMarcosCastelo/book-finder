import React from 'react';
import { CardItem, Content, Thumbnail } from './styles';
import { VolumeInfo } from '../../App';

interface Props {
  book: VolumeInfo
};

const Cards: React.FC<Props> = ({book}) => {
  return (
    <CardItem href={book.infoLink} target="_blanck">
      <Thumbnail src={book.imageLinks.thumbnail}/>
      <Content>
        <h4>{book.title}</h4>
        <span className="author">Author: {book.authors.join(", ")}</span>
        <p>{book.subtitle}</p>
      </Content>
    </CardItem>
  );
}

export default Cards;