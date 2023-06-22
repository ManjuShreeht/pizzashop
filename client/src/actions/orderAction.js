import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

export const placeOrder = (token, subtotal,currentUser,cart) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  
  try {
    const res = await axios.post("https://pizzaapp-e8ek.onrender.com/api/orders/placeorder", {
      token,
      subtotal,
      currentUser,
      cart,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    toast.success(' pizza ordered successfully')
    
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAIL", payload: error });
    toast.error('failed to order pizza')
    console.log(error);
  }
};


export const getUserOrders = (currentUser) => async (dispatch, getState) => {
  
  dispatch({ type: "GET_User_Orders_REQUEST" });
  const userId=currentUser._id
  try {
    const res = await axios.post("https://pizzaapp-e8ek.onrender.com/api/orders/getuserorders", {
            userid: userId
    });
    
    console.log(res);
    dispatch({ type: "GET_User_Orders_Success", payload: res.data });
  } catch (err) {
    toast.error('failed to  to load order pizza')
    dispatch({ type: "GET_User_Orders_FALID", payload: err });
  }
};

export const deleteUserOrders = (orderId) => async (dispatch, getState) => {
  
  dispatch({ type: "DELETE_User_Orders_REQUEST" });
  // const orderId=orderId
  try {
    const res = await axios.post("https://pizzaapp-e8ek.onrender.com/api/orders/deleteorder", {
      orderId:orderId
    });
    
    console.log(res);
    dispatch({ type: "DELETE_User_Orders_Success", payload: res.data });
    toast.success(' order canceled  successfull')
    window.location.href='/'
    
  } catch (err) {
    toast.error('failed to delete user pizza')
    dispatch({ type: "DELETE_User_Orders_FALID", payload: err });
  }
};