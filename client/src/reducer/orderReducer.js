export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
      case "PLACE_ORDER_REQUEST":
        return {
          loading: true,
        };
      case "PLACE_ORDER_SUCCESS":
        return {
          loading: false,
          success: true,
        };
      case "PLACE_ORDER_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };







  export const getUserOrders = (state = { orders: [] }, action) => {
    switch (action.type) {
      case "GET_User_Orders_REQUEST":
        return {
          loading: true,
          ...state,
        };
      case "GET_User_Orders_Success":
        return {
          loading: false,
          orders: action.payload,
        };
      case "GET_User_Orders_FALID":
        return {
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };

  export const deleteUserOrders = (state = {  }, action) => {
    switch (action.type) {
      case "DELETE_User_Orders_REQUEST":
        return {
          loading: true,
          ...state,
        };
      case  "DELETE_User_Orders_Success":
        return {
          loading: false,
         success:true
        };
      case "DELETE_User_Orders_FALID":
        return {
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };