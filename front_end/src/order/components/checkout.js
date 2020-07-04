import React from 'react';
const checkout = props => {
  return <div className="checkout">
    <div className={props.step1 ? 'active' : ''} >Signin</div>
    <div className={props.step2 ? 'active' : ''} >Shipping</div>
    <div className={props.step3 ? 'active' : ''} >Payment</div>
    <div className={props.step4 ? 'active' : ''} >Place Order</div>
  </div>
}

export default checkout;
