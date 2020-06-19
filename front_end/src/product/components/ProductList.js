import React from 'react';
import ProductItem from './ProductItem.js'
import { Card } from 'semantic-ui-react'
const ProductList = props => {

  return (
    <Card.Group itemsPerRow={3}>
      {props.items.map(product => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          brand={product.brand}
          rating={product.rating}
        />
      ))}
    </Card.Group>
  );
};

export default ProductList;
