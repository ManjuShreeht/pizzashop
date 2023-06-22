// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import StripeCheckout from "react-stripe-checkout";
// // import { placeOrder } from "../actions/orderAction";
// import Loading from "./Loading";
// import Error from "./Error";
// import Success from "./Success";
// import { placeOrder } from "../actions/orderAction";
// import { Button } from "react-bootstrap";

// const Checkout = ({ subtotal }) => {
//   const cartstate = useSelector((state) => state.getCartReducer);
//   const { cart } = cartstate;
//   const userdata = useSelector((state) => state.userLoginReducer);
//   const { currentUser } = userdata;
//   const orderstate = useSelector((state) => state.placeOrderReducer);
//   const { loading, error, success } = orderstate;
//   const dispatch = useDispatch();
//   const tokenHandler = (token) => {
//     dispatch(placeOrder(token, subtotal, currentUser, cart));
//     console.log(token);
//   };
//   return (
//     <>
//       <StripeCheckout
//         amount={subtotal * 100}
//         shippingAddress
//         token={tokenHandler}
//         stripeKey="pk_test_51LwgK4SHPx1utwaqQ3ZW2JvStiqsMudncA4gAs7eWPjxN5snSUTWo199ZGZ2At8yQQvFSOPLaZfCwbmHpZuzvpkr00vl2hsIoZ"
//         currency="INR">
//         <Button className="btn ms-5">Pay Now</Button>
//       </StripeCheckout>
//     </>
//   );
// };

// export default Checkout;
