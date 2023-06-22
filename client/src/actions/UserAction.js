import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const userRegisetr = (user) => async (dispatch) => {
  dispatch({ type: "REGISTER_REQUEST" });
  try {
    const res = await axios.post(
      "https://pizzaapp-e8ek.onrender.com/api/user/register",
      {
        username: user.username,
        email: user.email,
        mobile: user.mobile,
        password: user.password,
      }
    );

    dispatch({ type: "REGISTER_SUCCESS", payload: res });
    // toast.success('Registration successfull')
    window.location.href = "/login";
  } catch (error) {
    dispatch({ type: "REGISTER_FAIL", payload: error });
    // toast.error('Enter Correct Details')
  }
};

export const userLogin = (user) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  try {
    const res = await axios.post(
      "https://pizzaapp-e8ek.onrender.com/api/user/login",
      {
        email: user.email,
        password: user.password,
      }
    );

    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.others });
    localStorage.setItem("currentUser", JSON.stringify(res.data.others));
    localStorage.setItem("pizza_token", res.data.token);
    localStorage.setItem("admin", res.data.others.isAdmin);
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: error });
    toast.error("Invalid Credentials");
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("admin");
  localStorage.removeItem("singleItem");
  window.location.href = "/";
};

export const deleteUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: "DELETE_User_REQUEST" });
  // const orderId=orderId
  try {
    const res = await axios.post(
      "https://pizzaapp-e8ek.onrender.com/api/user/deleteuser",
      {
        userId: userId,
      }
    );

    console.log(res);
    dispatch({ type: "DELETE_User_Success", payload: res.data });
    toast.success("user deleted successfull");
    window.location.href = "/";
  } catch (err) {
    toast.error("Now you can't delete ");
    dispatch({ type: "DELETE_User_FALID", payload: err });
  }
};
