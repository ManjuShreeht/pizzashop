import React from "react";
import{Link} from 'react-router-dom'
import {IoMdArrowRoundBack} from 'react-icons/io'

import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { useSelector } from "react-redux";
const Contact = () => {
  const {theme}=useSelector(state=>state.DarkReducer)
  return (
    <div style={{ backgroundColor:theme=='light'?"#fff":"#212529",height:"508px",overflow: "hidden"}} >
        <div className="row align-items-center justify-content-center  " >
       
          <h1 className="col-md-6" style={{ textAlign:"center",marginTop:"15px",marginBottom:"25px", color:theme=="light"?"black":"white" }}>Contact Us</h1>
        </div>
      <div className="row contactus ">
        <div className="col-md-4 "style={{marginLeft:"100px"}}>
          <img
              src='https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000'
           
            alt="contactus"
            style={{ width: "350px", height:"350px",borderRadius:"10px"}}
          />
        </div>
        <div className="col-md-6" style={{fontSize:"18px"}}>
        
          <p className="text-justify mt-2" style={{ color:theme=='light'?"black":"white"}}>
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3" style={{ color:theme=='light'?"black":"white"}}>
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3" style={{ color:theme=='light'?"black":"white"}}>
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3" style={{ color:theme=='light'?"black":"white"}}>
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;