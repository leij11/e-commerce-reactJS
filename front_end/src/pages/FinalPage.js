import React from 'react';
import { Message } from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import {removeFromCart } from '../actions/cart_actions';
import './FinalPage.css';
const FinalPage = props => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  return(
    <div className="final-container">
      <div className="final-title">

        <Message
     success
     header='Congratulations! Your order was successful'
     content='You may view detailed order history in your profile section'
   />
      </div>
      <div>
      {
        cartItems.map(item =>
          dispatch(removeFromCart(item.product)))
      }
      </div>
    </div>
  )
}

export default FinalPage;
