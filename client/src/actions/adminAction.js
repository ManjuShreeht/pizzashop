 import axios from "axios";
 import { ToastContainer, toast } from "react-toastify";

export const addPizza = (pizza) => async (dispatch) => {
    dispatch({ type: "ADD_PIZZA_REQUEST" });
  
    try {
      const res = await axios.post('http://localhost:8899/api/pizza/addPizza', {
       name:pizza.name,
       image:pizza.image,
       description:pizza.description,
       category:pizza.category,
       prices: pizza.prices
        
    })
      console.log(res);
      dispatch({ type: 'ADD_PIZZA_SUCCESS'});
      toast.success('pizza added successfull')
      window.location.href='/'
    } catch (error) {
      toast.error('server error')
      dispatch({ type: 'ADD_PIZZA_FAILED', payload: error });
    }
  };


  export const editPizza = (pizza,id) => async (dispatch) => {
    dispatch({ type: 'EDIT_PIZZA_REQUEST' });
  
      try {
      const res = await axios.put(`http://localhost:8899/api/pizza/edit/${id}`, {
       name:pizza.name,
       image:pizza.image,
       description:pizza.description,
       category:pizza.category,
       prices: pizza.prices
        
    },{
        headers:{token:`bearer ${localStorage.getItem("pizza_token")} `}
    })
     console.log(res);
      dispatch({ type: 'EDIT_PIZZA_SUCCESS' });
      toast.success('pizza updated successfull')
      
      window.location.href='/getall'

    } catch (error) {
      toast.error('server error')
      dispatch({ type: 'EDIT_PIZZA_FAILED', payload: error });
    }
  };


  export const getPizzaId = (id) => async (dispatch) => {
    dispatch({ type: 'GETID_PIZZA_REQUEST' });
  
      try {
      const res = await axios.get(`http://localhost:8899/api/pizza/getbyid/${id}` )    
        
  
     
      dispatch({ type: 'GETID_PIZZA_SUCCESS',payload:res.data });
      localStorage.setItem('singleItem',JSON.stringify(res.data))
     
      
    } catch (error) {
      toast.error('server error')
      dispatch({ type: 'GETID_PIZZA_FAILED', payload: error });
    }
  };



  export const deletePizza = (id) => async (dispatch) => {
    dispatch({ type: 'DELETE_PIZZA_REQUEST' });
  
      try {
      const res = await axios.delete(`http://localhost:8899/api/pizza/delete/${id}`     
        
    )
     console.log(res);
      dispatch({ type: 'DELETE_PIZZA_SUCCESS' });
      toast.success('pizza deleted successfull')
      window.location.href='/'
    } catch (error) {
      toast.error('server error')
      dispatch({ type: 'DELETE_PIZZA_FAILED', payload: error });
    }
  };

  export const getAllUser = () => async (dispatch) => {
    dispatch({ type: 'GET_USER_REQUEST' });
  
      try {
      const res = await axios.get(`http://localhost:8899/api/user/getalluser` 
        
    )
     console.log(res);
      dispatch({ type: 'GET_USER_SUCCESS',payload:res.data.data });
      
    } catch (error) {
      dispatch({ type: 'GET_USER_FAILED', payload: error });
      toast.error('seve error')
    }
  };

  export const getAllOrder= () => async (dispatch) => {
    dispatch({ type: 'GET_ORDER_REQUEST' });
  
      try {
      const res = await axios.get(`http://localhost:8899/api/orders/getallorders` 
      
        
    )
     console.log(res);
      dispatch({ type: 'GET_ORDER_SUCCESS',payload:res.data });
      
    } catch (error) {
      dispatch({ type: 'GET_ORDER_FAILED', payload: error });
      toast.error('seve error')
    }
  };

  export const DeliverOrder= (id) => async (dispatch) => {
    dispatch({ type: 'GET_DELIVER_REQUEST' });
  
      try {
      const res = await axios.post(`http://localhost:8899/api/orders/updateorders`,
      {id}
        
       )
     
       
       console.log(res);
       dispatch({ type: 'GET_DELIVER_SUCCESS',payload:res.data });
       toast.success(' order delivered successfull')
       window.location.href='/'
      
    } catch (error) {
      toast.error('server error')
      dispatch({ type: 'GET_DELIVER_FAILED', payload: error });
    }
  };

 
