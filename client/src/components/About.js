import React from "react";
import{Link} from 'react-router-dom'
import {IoMdArrowRoundBack} from 'react-icons/io'
import { useSelector } from "react-redux";

const About = () => {
  const {theme}=useSelector(state=>state.DarkReducer)
  return (
    <div style={{ backgroundColor:theme=='light'?"#fff":"#212529",height:"508px", overflow: "hidden"}}>
       <div className="row align-items-center justify-content-center  "  >
        
          <h1 className="col-md-6" style={{ textAlign:"center",marginTop:"15px",marginBottom:"25px",color:theme=="light"?"black":"white" }}>About Us</h1>
        </div>
      <div className="row contactus ">
        <div className="col-md-3 " style={{marginLeft:"50px"}}>
          <img
          src='https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000'
             alt="contactus"
            style={{ width: "350px",height:"350px" , borderRadius:"10px" }}
          />
        </div>
        <div className="col-md-7" style={{fontSize:"18px",marginLeft:"150px"}}>
          <p className="text-justify mt-2" style={{ color:theme=='light'?"black":"white"}}>
          USPizza is all about quality you can trust. As one of the original
           founding Pizza brands and the 3rd largest Pizza chain in India,
            our sole mission is making the freshest, tastiest and funnest Pizza around.
Our classic pan pizza will always be a fan favourite, with a soft and chewy
 crust perfectly balancing out the healthy tomato pure and mozzarella - cheddar blended cheese.
Our authentic Italian crust for those who would prefer a light
 and airy crust to more fully enjoy the toppings. Thin, light and delicious.
           
          </p>
          <p className="text-justify mt-2" style={{ color:theme=='light'?"black":"white"}}>
          Our newest addition of Puree sauces will blow your mind.
           Chose between a spicy buffalo, sweet bbq, tangy chipotle 
           can creamy makhni to perfectly compliment your toppings and crust.
           Our suggestions of combinations might be helpful but ultimately the power lies with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
