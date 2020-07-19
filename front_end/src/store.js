
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {
  productListReducer
} from './reducers/product_reducer';
import { cartReducer } from './reducers/cart_reducer';
import {
  orderCreateReducer,
  orderDeleteReducer
} from './reducers/order_reducer';

const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
  cart: { cartItems, shipping: {}, payment: {} }
};
const reducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDelete: orderDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
