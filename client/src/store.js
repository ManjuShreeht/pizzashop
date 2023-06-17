import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { userRegisterRouter, userLoginReducer,deleteUserReducer } from "./reducer/userReducer";
import { getAllPizzasReducer } from "./reducer/pizzaReducer";

import {
  addCartReducer,
  getCartReducer,
  deleteCartReducer,
  updateCartReducer,
  deleteUserCartReducer,
} from "./reducer/cartReducer";
import { placeOrderReducer, getUserOrders,deleteUserOrders } from "./reducer/orderReducer";

import { AddPizzasReducer, editPizzasReducer,deletePizzasReducer,getUserReducer,getAllOrdersReducer,deliverReducer,getIdPizzasReducer  } from "./reducer/adminReducer";

import {DarkReducer} from './reducer/darkReducer'
const finalReducer = combineReducers({
  userRegisterRouter: userRegisterRouter,
  userLoginReducer: userLoginReducer,
  getAllPizzasReducer: getAllPizzasReducer,
  addCartReducer: addCartReducer,
  getCartReducer: getCartReducer,
  deleteCartReducer: deleteCartReducer,
  updateCartReducer: updateCartReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrders: getUserOrders,
  deleteUserCartReducer: deleteUserCartReducer,
  AddPizzasReducer: AddPizzasReducer,
  editPizzasReducer: editPizzasReducer,
  deletePizzasReducer:deletePizzasReducer,
  getUserReducer:getUserReducer,
  getAllOrdersReducer:getAllOrdersReducer,
  deliverReducer:deliverReducer,
  deleteUserOrders :deleteUserOrders ,
  deleteUserReducer:deleteUserReducer,
  DarkReducer:DarkReducer,
  getIdPizzasReducer:getIdPizzasReducer
});
const cartItems = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
console.log(cartItems);
const admin=localStorage.getItem("admin")?localStorage.getItem("admin"):null
const singleItem=localStorage.getItem('singleItem')? JSON.parse(localStorage.getItem('singleItem')):null
const cart =
  currentUser && cartItems
    ? cartItems.filter((item) => {
        console.log(item.userId);
        return currentUser._id == item.userId;
      })
    : [];

const initialState = {
  getCartReducer: {
    cart: cart,
  },
  userLoginReducer: {
    currentUser: currentUser,
    admin:admin
  },
  getIdPizzasReducer:{
    singleItem:singleItem
  }
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
