import React from 'react';
import { CardItem, Content, Thumbnail } from './styles';

const Cards: React.FC = () => {
  return (
    <CardItem>
      <Thumbnail />
      <Content>
        <h4>Title</h4>
        <span className="ago">Author</span>
        <p> Proin vulputate pellentesque efficitur.</p>
      </Content>
    </CardItem>
  );
}

export default Cards;