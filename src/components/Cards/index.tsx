import React from 'react';
import { CardItem, Content } from './styles';
import { VolumeInfo } from '../../App';

interface Props {
  book: VolumeInfo
};

const Cards: React.FC<Props> = ({book}) => {
  return (
    <CardItem href={book.previewLink} target="_blanck">
      <img 
        src={book.imageLinks.thumbnail !== '-' ? 
        book.imageLinks.thumbnail : 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/2000px-Placeholder_book.svg.png'}
        alt={`${book.title}`}
      />
      <Content>
        <h4>{book.title}</h4>
        <span className="author"><strong>Author: </strong>{book.authors.join(", ")}</span>
        <p><strong>Published: </strong>{book.publishedDate !== undefined ? book.publishedDate.split('-').reverse().join('/') : '-'}</p>
        <p><strong>Pubisher: </strong>{book.publisher !== undefined ? book.publisher : '-'}</p>
      </Content>
    </CardItem>
  );
}

export default Cards;