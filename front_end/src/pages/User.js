import React, { useState, useContext,useEffect } from 'react';
import { AuthContext } from '../share/context/auth-context';
import axios from 'axios';
import ErrorModal from '../share/UIElements/ErrorModal';
import { useHttpClient } from '../share/hooks/http-hook';
import { Image, Item } from 'semantic-ui-react'

const User = props => {
  const auth = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  //console.log(auth.userId);
  //fetch user id
  useEffect(() => {
      const fetchOrder = async () => {
        try{
        const responseData=await sendRequest(process.env.REACT_APP_BACKEND_URL+`/order/users/${auth.userId}`);

        setOrders(responseData.orders);
      } catch (err) {}
      };
      fetchOrder();

    }, [sendRequest, auth.userId]);

//console.log(orders[0]);

  return(
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <h4 class="ui dividing header">Order History</h4>
      <Item.Group>
      {orders.map(order => (
        order.orderItems.map(item=>
        <Item>
          <Item.Image size='tiny' src={item.image} />

          <Item.Content>
            <Item.Header>Order ID: {order._id}</Item.Header>
            <Item.Meta>Name: {item.name}</Item.Meta>
            <Item.Meta>Product ID: {item.product}</Item.Meta>
            <Item.Meta>
              <span className='price'>Price: $ {item.price}</span>
              <span className='qty'> Qty : {item.qty}</span>
            </Item.Meta>
            <Item.Meta>
              <span className='address'>Shipping: {order.shipping.address}</span>
              <span className='postalCode'> {order.shipping.postalCode}</span>
              <span className='city'> {order.shipping.city}</span>
              <span className='country'> {order.shipping.country}</span>
            </Item.Meta>
            <Item.Meta>Payment: {order.payment}</Item.Meta>
            <Item.Extra>Order Date:{order.createdAt}</Item.Extra>
          </Item.Content>
        </Item>)

      ))}
      </Item.Group>
    </React.Fragment>
  )
}

export default User;
