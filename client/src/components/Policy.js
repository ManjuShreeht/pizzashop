import React from "react";
import{Link} from 'react-router-dom'
import {IoMdArrowRoundBack} from 'react-icons/io'
import { useSelector } from "react-redux";

const Policy = () => {
  const {theme}=useSelector(state=>state.DarkReducer)
  return (
    <div style={{ backgroundColor:theme=='light'?"#fff":"#212529",height:"508px",overflow: "hidden"}}>
        <div className="row align-items-center justify-content-center  " >
        
          <h1 className="col-md-6" style={{ textAlign:"center",marginTop:"15px",marginBottom:"25px",color:theme=="light"?"black":"white" }}>terms and policy</h1>
        </div>
      <div className="row contactus ">
        <div className="col-md-4" style={{marginLeft:"100px"}}>
          <img
            src='https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000'
           
            alt="contactus"
            style={{ width: "450px",height:"350px" , borderRadius:"10px" }}
          />
        </div>
        <div className="col-md-6" style={{fontSize:"18px",marginLeft:"100px"}}>
          <p style={{ color:theme=='light'?"black":"white",fontSize:"18px"}}>Please reaad these terms and conditions of use
          carefully. BY accessing web using online ordering, with respect to Franchise Stores, you acknowledge and agree that We (a)
are only facilitating your transaction with the Franchise Stores that you have selected to provide you
with the products you have ordered; (b) do not provide you with any products; and (c) do not store
any payment information and only facilitate online payments for the benefit of Franchise Stores from
which you have ordered products and/or services; 
.</p>
          <p style={{ color:theme=='light'?"black":"white",fontSize:"18px"}}>These Terms & Conditions are published in accordance with the Information Technology Act,
2000, Consumer Protection Act, 2019,</p>
        
        </div>
      </div>
    </div>
  );
};

export default Policy;