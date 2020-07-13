import React from 'react';
import ProductItem from './ProductItem.js'
import { Card } from 'semantic-ui-react'
import './ProductList.css'
const ProductList = props => {
  return (
    <div className='product-list' >
    <Card.Group mobile={12} tablet={6} computer={4}>
      {props.items.map(product => (
        <ProductItem
          key={product.id}
          id={product._id}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          brand={product.brand}
          rating={product.rating}
          size={product.size}
          color={product.color}
          numReviews={product.numReviews}
        />
      ))}
    </Card.Group>
    </div>
  );
};

export default ProductList;
