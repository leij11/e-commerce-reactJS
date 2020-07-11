import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeFromCart } from '../actions/cart_actions';

const FinalPage = props => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  return(
    <div>
      <h1>
        Congrats, your order has been successfully place!
      </h1>
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
