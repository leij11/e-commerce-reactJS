import React from 'react';
import { Card,Image, Rating } from 'semantic-ui-react'
import './ProductItem.css'
import { Link } from 'react-router-dom';

const ProductItem = props => {
  return (
      <Card  >
      <Link to={`/product/${props.id}`}>
        <Image src={props.image} alt={props.title}  mode='fit' width={400} height={300}/>
        <Card.Content>
          <Card.Header className="product-title-font"> {props.name} </Card.Header>
          <Card.Description className="product-h2-font"> {props.brand} </Card.Description>
          <Card.Header className="product-h1-font"> ${props.price} </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <span class="left floated">
            <Rating icon='star' defaultRating={props.rating} maxRating={5} disabled size='small'/>
          </span>
          <span class="right floated">
            {props.numReviews} reviews
          </span>
        </Card.Content>
              </Link>
      </Card>
  );
};

export default ProductItem;
