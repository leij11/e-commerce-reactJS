import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { savePayment } from '../actions/cart_actions';
import { createOrder } from '../actions/order_actions';
import Paypal from '../utils/Paypal'
import {Button } from 'semantic-ui-react';

const Payment = props => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const { cartItems, shipping, payment } = cart;
    if (!shipping.address) {
      props.history.push("/shipping");
}
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
  };
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const orderCreate = useSelector(state => state.orderCreate);
  const { success, error, order } = orderCreate;

  const placeOrderHandler = () => {
  dispatch(createOrder({
    orderItems: cartItems, shipping, payment, itemsPrice, shippingPrice,
    taxPrice, totalPrice
  }));
}

  const backHandler= () => {
    props.history.push("/shipping");
  }
useEffect(() => {
  if (success) {
    props.history.push("/order/" + order._id);
  }

}, [success]);
  return (
    <div>
    <Button type="button" className="button" onClick={backHandler} >
      Last step
    </Button>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Payment</h2>
            </li>

            <li>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="paypal"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                <label for="paymentMethod">Paypal</label>
              </div>
            </li>

            <li>
                <Paypal toPay={totalPrice}/>
            </li>
            <Button onClick={() => {props.history.push("/placeorder")}}>
            continue
            </Button>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Payment;
