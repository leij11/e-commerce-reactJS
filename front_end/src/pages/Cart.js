import React, { useEffect,useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cart_actions';
import '../Cart/components/Cart.css';
import { AuthContext } from '../share/context/auth-context';
import { Button } from 'semantic-ui-react'

const Cart = props => {
  const auth = useContext(AuthContext);
  const productID = props.match.params.id ? props.match.params.id : '';
  const qty=1
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 99 ? 0 : 10;
    const taxPrice = Math.round(0.15 * itemsPrice);
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }

  const decrement = (product, qty) => {
    if (qty<=1){
      dispatch(removeFromCart(product));
    }
    else
    {
      dispatch(addToCart(product, qty-1))
    }
  }

  const increment = (product, qty,stock) => {
    if (qty<stock){
      dispatch(addToCart(product, qty+1))
    }
  }

  const checkoutHandler = () => {
    if(auth.isLoggedIn)
    {
      props.history.push("/shipping");
    }
    else {
      props.history.push("/auth?redirect=shipping");
    }
  }
  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty));
    }
  }, []);

  return (
    <div className="cart">
        <div className="cart-list">
          <ul className="cart-list-container">
            <li>
              <h3>
                Shopping Cart
              </h3>
              <div>
                Price
              </div>
            </li>
            {
              cartItems.length === 0 ?
                <div>
                  Cart is empty
              </div>
                :
                cartItems.map(item =>
                  <li>
                    <div className="cart-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="cart-name">
                      <div>
                        <Link to={"/product/" + item.product}>
                          {item.name}
                        </Link>

                      </div>
                      <div>
                        Qty:
                        <button className="cart_sign" onClick={() => increment(item.product,item.qty,item.countInStock)}>
                        +
                        </button>
                        <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                             {[...Array(item.countInStock).keys()].map(x =>
                               <option key={x + 1} value={x + 1}>{x + 1}</option>
                             )}
                           </select>
                           <button className="cart_sign" onClick={() => decrement(item.product,item.qty)}>
                           -
                           </button>
                        <button className="cart_delete" onClick={() => removeFromCartHandler(item.product)} >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="cart-price">
                      ${item.price}
                    </div>
                  </li>
                )
            }
          </ul>

        </div>

          <div className="placeorder-action">
        <ul>

          <li>
            <h3>Order Summary</h3>
          </li>
          <li>
            <div>Price</div>
            <div>${itemsPrice}</div>
          </li>
          <li>
            <div>Shipping</div>
            <div>${shippingPrice}</div>
          </li>
          <li>
            <div>Tax</div>
            <div>${taxPrice}</div>
          </li>
          <li>
            <div>Order Total</div>
            <div>${totalPrice}</div>
          </li>
        </ul>

        <Button primary onClick={checkoutHandler}  disabled={cartItems.length === 0}>
          Proceed to Checkout
        </Button>

      </div>

        </div>
  )

}

export default Cart;
