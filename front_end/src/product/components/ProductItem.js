import React from 'react';
import { Card,Icon,Image, Rating } from 'semantic-ui-react'

const ProductItem = props => {
  console.log(props.price)
  return (
      <Card>
        <Image src={props.image} alt={props.title} fluid/>
          <Card.Header> {props.name} </Card.Header>
          <Card.Content extra>
            <Icon name='dollar' /> {props.price}
            <Rating icon='star' defaultRating={props.rating} maxRating={5} disabled/>
        </Card.Content>
      </Card>
  );
};

export default ProductItem;
