import React from 'react';
import { Card,Image, Rating } from 'semantic-ui-react'
import './ProductItem.css'

const ProductItem = props => {
  return (
      <Card>
        <Image src={props.image} alt={props.title} fluid/>
        <Card.Content>
          <Card.Header className="product-title-font"> {props.name} </Card.Header>
          <Card.Description className="product-h2-font"> {props.brand} </Card.Description>
          <Card.Header className="product-h1-font"> {props.price} </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <span >
            <Rating icon='star' defaultRating={props.rating} maxRating={5} disabled size='small'/>
          </span>
        </Card.Content>
      </Card>
  );
};

export default ProductItem;
