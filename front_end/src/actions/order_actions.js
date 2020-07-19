import Axios from "axios";
import {
  ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL,
  ORDER_DELETE_REQUEST, ORDER_DELETE_SUCCESS,ORDER_DELETE_FAIL
} from "./index.js";

const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    const { data: { data: newOrder } } = await Axios.post(process.env.REACT_APP_BACKEND_URL+"/order", order)
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: newOrder });
  } catch (error) {
    dispatch({ type: ORDER_CREATE_FAIL, payload: error.message });
  }
}

const deleteOrder = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DELETE_REQUEST, payload: orderId });
    //const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.delete(process.env.REACT_APP_BACKEND_URL+"/order/" + orderId
    //, {
      //headers:
        //{ Authorization: 'Bearer ' + userInfo.token }
    //}
  );
    dispatch({ type: ORDER_DELETE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ORDER_DELETE_FAIL, payload: error.message });
  }
}
export { createOrder, deleteOrder };
