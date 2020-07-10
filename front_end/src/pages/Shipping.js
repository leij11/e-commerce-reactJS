import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cart_actions';
import {Form,Button,Input,TextArea } from 'semantic-ui-react';
import StripeCheckout from "react-stripe-checkout";

const Shipping = props => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const cart = useSelector(state => state.cart);
  const { cartItems, shipping, payment } = cart;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    props.history.push('/payment');
  }

  function handleToken(token, addresses) {
    console.log(token,addresses);
    /*
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, product }

    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
    */
  }
  return(
<React.Fragment>
    <Form>
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
      label='Billing Address'
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

    <h4 class="ui dividing header">Billing Information</h4>
    </Form>

    <StripeCheckout
      stripeKey="pk_test_51H3QEsF4OAc3evOhCY90DsnwJtnlFiLZX6G34A5Fw25MVYu1qLephFYQCYa2d8ht674p55JnvPVEDhTobYSiAfBG00Irp7GHn0"
      token={handleToken}
      amount={totalPrice*100}
      name={firstName+lastName}
      address
    />
</React.Fragment>
  )
}

export default Shipping;
