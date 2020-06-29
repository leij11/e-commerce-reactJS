import React from 'react';
import ProductItem from './ProductItem.js'
import { Card } from 'semantic-ui-react'
import './ProductList.css'
const ProductList = props => {
  return (
    <div className='product-list' >
    <Card.Group itemsPerRow={2}>
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
        />
      ))}
    </Card.Group>
    </div>
  );
};

export default ProductList;
