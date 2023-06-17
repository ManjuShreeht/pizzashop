export const userRegisterRouter = (state = {}, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "REGISTER_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
        admin:action.payload.isAdmin
      };
    case "LOGIN_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const deleteUserReducer = (state = {  }, action) => {
  switch (action.type) {
    case "DELETE_User_REQUEST" :
      return {
        loading: true,
        ...state,
      };
    case  "DELETE_User_Success":
      return {
        loading: false,
       success:true
      };
    case "DELETE_User_FALID":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};