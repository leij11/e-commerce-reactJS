import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import './ProductDetail.css'
import {Button,Icon,Rating } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const ProductDetail = props => {
  const [loadedProduct, setLoadedProduct] = useState({});
  const productID=useParams().id;
  useEffect(() => {
    const fetchProduct = async () => {
      const {data}=await axios.get("/api/product/"+productID);
      setLoadedProduct(data);
    };
    fetchProduct();
    return ()=>{};
  }, []);
  const product=loadedProduct

  const handleAddToCart = () => {
  props.history.push('/cart/' + productID);
};
  return(
    <React.Fragment>
    <div className='detail-button'>
      <Button animated  >
        <Button.Content visible>
          <NavLink to="/">
            Back
          </NavLink>
        </Button.Content>
        <Button.Content hidden>
          <Icon name='arrow left' />
        </Button.Content>
      </Button>
      <Button animated='vertical' onClick={handleAddToCart} >
        <Button.Content visible>
        <NavLink to="/cart/:id">
        <Icon name='shop' />
          Add to Cart
        </NavLink>
        </Button.Content>
        <Button.Content hidden>
          <Icon name='shop' />
        </Button.Content>
      </Button>
    </div>

    <div className="details">

      <div className="details-image">
        <img src={product.image} alt="product"></img>
      </div>
      <div className="details-info">
        <ul>
          <li>
            <h2>{product.name}</h2>
          </li>
          <li>
            <h5>{product.description} </h5>
          </li>
          <li>
            Price: $<b>{product.price}</b>
          </li>
          <li >
            <Rating icon='star' defaultRating={2} maxRating={5} disabled size='small'/>
            <h5>(numReviews: {product.numReviews} )</h5>
          </li>
        </ul>
      </div>
      </div>
  </React.Fragment>
  )


}
export default ProductDetail
