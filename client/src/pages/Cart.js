import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  deleteCart,
  deletecart,
  getCart,
  updateCart,
} from "../actions/CartAction";
import Checkout from "../components/Checkout";
import { Button } from "react-bootstrap";


const Cart = () => {
  const cartstate = useSelector((state) => state.getCartReducer);
  const { cart } = cartstate;
  const userdata = useSelector((state) => state.userLoginReducer);
  const { currentUser } = userdata;
  const dispatch = useDispatch();
  const navigate=useNavigate()
  // useEffect(() => {
  //   dispatch(getCart(currentUser));
  // }, [cart,dispatch,currentUser]);
  const {theme}=useSelector(state=>state.DarkReducer)
  const cartdelete=(item)=>{
      dispatch(deleteCart(item))
      dispatch(getCart(currentUser))
    
  }

  var subtotal = cart && cart.reduce((tot, item) => tot + item.price, 0);

  return (
    <div  style={{ backgroundColor:theme=='light'?"#fff":"#212529",height:"max-content" }}>
    <div>
     { cart && cart.length?(
     <>
     <div className="row justify-content-center "style={{paddingBottom:"170px"}}>
        <div className="col-md-6 ">
          <h2 style={{color:theme=='light'?"black":"#fff", fontSize: "40px", marginBottom: "30px", paddingTop:"20px" }}>My Cart</h2>
          <Button className="bg-danger "
              onClick={() => {
                dispatch(deletecart(currentUser));
                dispatch(getCart(currentUser))
              }}
              style={{marginBottom:"40px"}}
              >
              Clear Cart
            </Button>
          {cart &&
            cart.map((item) => {
              return (
                <div className="flex-container ">
                  <div className="text-left m-1 w-100">
                    <h4 style={{color:theme=='light'?"black":"#fff"}}>
                      {item.name} [{item.varient}]
                    </h4>
                    <h4 style={{color:theme=='light'?"black":"#fff"}} >
                      Price :{item.quantity} * {item.prices[0][item.varient]}=
                      {item.price}
                    </h4>
                    <h4 style={{color:theme=='light'?"black":"#fff", display: "inline" }}>Quantity:</h4>
                    <AiOutlinePlus
                      className="cart-plus"
                      onClick={() =>{
                        dispatch(
                          updateCart(
                            item,
                            Number(item.quantity) + 1,
                            item.varient
                          )
                        );
                        dispatch(getCart(currentUser))}
                      }
                    />
                    <b style={{color:theme=='light'?"black":"#fff"}}>{item.quantity}</b>
                    <AiOutlineMinus
                      className="cart-minus"
                      onClick={() =>{
                        dispatch(
                          updateCart(item, item.quantity - 1, item.varient)
                        );
                        dispatch(getCart(currentUser))
                      }}
                    />
                    <hr />
                  </div>
                  <div className="m-2 ms-5 w-70">
                    <img src={item.image} style={{ height: "80px" }} />
                  </div>
                  <div className="m-2 w-50 mt-4 me-5">
                    <AiOutlineDelete
                      className="del"
                      onClick={()=>cartdelete(item)
                                  }
                                  style={{cursor:"pointer"}}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="col-md-4">
          <h2 style={{color:theme=='light'?"black":"#fff", fontSize: "45px", marginBottom: "30px",paddingTop:"20px" }}>
            SubTotal: {subtotal} /-
          </h2>
          <Checkout subtotal={Number(subtotal)} />
        </div>
      </div>
      </>
      )
    :(

<div style={{padding:"207px 450px"}}>
              <h1 style={{color:theme=='light'?"black":"#fff"}}>Cart Is Empty </h1>
              <Button  style={{marginLeft:"80px"}} onClick={()=>navigate('/')}>Add Pizza</Button>
           
        </div>
          
         
        


    )
    }
    </div>
    </div>
  );
};

export default Cart;
