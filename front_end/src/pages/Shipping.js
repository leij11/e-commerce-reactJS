import React, { useState,useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cart_actions';
import {Form,Input } from 'semantic-ui-react';
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
import { createOrder } from '../actions/order_actions';
import { AuthContext } from '../share/context/auth-context';
import './Shipping.css';

const Shipping = props => {
  const auth = useContext(AuthContext);
  const payment='paypal';
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const cart = useSelector(state => state.cart);
  const { cartItems} = cart;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = Math.round(itemsPrice + shippingPrice + taxPrice);
  const dispatch = useDispatch();

  //const key=process.env.STRIPE_KEY;
  //console.log(process.env.STRIPE_KEY);
  //console.log(process.env.REACT_APP_ASSET_URL);

  async function handleToken(token, addresses) {
    console.log(token,addresses);

    const response = await axios.post(process.env.REACT_APP_BACKEND_URL+
      "/stripe/checkout",
      {
        amount:totalPrice,
        source:token.id,
        token,
        name:firstName+" "+lastName,
        address:address
      }

    );
    const { status } = response.data;
    //console.log("Response:", response.data);
    if (status === "success") {
      dispatch(saveShipping({ address, city, postalCode, country }));
      dispatch(createOrder({
        orderItems: cartItems,
        user:auth.userId,
        payment,
        shipping:
        {
          address,
          city,
          postalCode,
          country
        },
        name:firstName+" "+lastName,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice
      }));
      console.log("Success! ", { type: "success" });
      props.history.push('./finalpage')
    } else {
      console.log(status, { type: "error" });
    }

  }
  return(
<React.Fragment>
    <Form className="ship-form">
    <h4 class="ui dividing header">Shipping Information</h4>
      <Form.Group widths='equal'>
      <Form.Field
        control={Input}
        label='First name'
        placeholder='First name'
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Form.Field
        control={Input}
        label='Last name'
        placeholder='Last name'
        onChange={(e) => setLastName(e.target.value)}
      />
    </Form.Group>
    <Form.Field
      control={Input}
      label='Shipping Address'
      placeholder='Address'
      onChange={(e) => setAddress(e.target.value)}
    />
    <Form.Group widths='equal'>
    <Form.Field
      control={Input}
      label='Postal code'
      placeholder='Postal code'
      onChange={(e) => setPostalCode(e.target.value)}
    />
    <Form.Field
      control={Input}
      label='City'
      placeholder='City'
      onChange={(e) => setCity(e.target.value)}
    />
    <Form.Field
      control={Input}
      label='Country'
      placeholder='Country'
      onChange={(e) => setCountry(e.target.value)}
    />
  </Form.Group>

    <h4>Payment</h4>
    </Form>
    <div className="stripe">
      <StripeCheckout
      className="stripe"
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={handleToken}
        amount={totalPrice*100}
        name={firstName+" "+lastName}
        address_line1={address}
      />
    </div>
</React.Fragment>
  )
}

export default Shipping;
