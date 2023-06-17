import axios from "axios";
import {  toast } from 'react-toastify';

export const getAllPizza = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZA_REQUEST" });
  try {
    const res = await axios.get("http://localhost:8899/api/pizza/getall");
   
    dispatch({ type: "GET_PIZZA_SUCCESS", payload: res.data });
  } catch (error) {
   
    dispatch({ type: "GET_PIZZA_FALID", payload: error });
    toast.error("server error")
  }
};

export const FilterPizza = (searchkey,category) => async (dispatch) => {
  var filterdata;
  dispatch({ type: "GET_PIZZA_REQUEST" });
  try {
    const res = await axios.get("http://localhost:8899/api/pizza/getall");
    // console.log(filterdata)
   filterdata=res.data.filter(pizza=>pizza.name.toLowerCase().includes(searchkey))
   if(category !=='all'){
    filterdata=res.data.filter(pizza=>pizza.category.toLowerCase()===category)
   }
   dispatch({ type: "GET_PIZZA_SUCCESS", payload: filterdata });
   console.log(filterdata)
 } catch (error) {
   console.log(error)
   toast.error("server error")
    dispatch({ type: "GET_PIZZA_FALID", payload: error });
  }
};