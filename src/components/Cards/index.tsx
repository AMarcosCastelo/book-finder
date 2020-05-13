import React from 'react';
import { CardItem, Content, Thumbnail } from './styles';
import { VolumeInfo } from '../../App';

interface Props {
  book: VolumeInfo
};

const Cards: React.FC<Props> = ({book}) => {
  return (
    <CardItem>
      <Thumbnail title={book.imageLinks.thumbnail}/>
      <Content>
        <h4>{book.title}</h4>
        <span className="ago">{book.authors.join(", ")}</span>
        <p> Proin vulputate pellentesque efficitur.</p>
      </Content>
    </CardItem>
  );
}

export default Cards;