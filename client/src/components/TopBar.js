import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer, MdViewArray } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/UserAction";
import { getCart } from "../actions/CartAction";
import { DarkAct } from "../actions/DarkAction";
import Form from 'react-bootstrap/Form';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import '../styles/topbar.css'

const TopBar = () => {

  
      const {theme}=useSelector(state=>state.DarkReducer)
      


    const cartstate = useSelector((state) => state.getCartReducer);
    const { cart } = cartstate;
    const userdata = useSelector((state) => state.userLoginReducer);
    const { currentUser,admin } = userdata;
    const dispatch = useDispatch();
    
    const changetheme=()=>{
     if(theme=="light"){
      dispatch(DarkAct('dark'))
    }else{
       dispatch(DarkAct('light'))
    }
  }
    console.log(theme)
  return (
    <>
      <Navbar id="nav" bg={theme==='light'?"white":"dark" }variant="dark" expand="lg" className= {theme==='light'?"shadow-lg p-2 mb-1 bg-light rounded":"" }>
      
        <Container fluid style={{width:"100%"}} >
           <h6 style={{color:theme==='light'?"black":"white",fontSize:"14px",paddingTop:"7px",paddingRight:"10px"}}>
          
            PIZZA SHOP
          </h6>
          {currentUser && currentUser.isAdmin ?"":
          <h6 id="none"
         style={{color:theme==='light'?"black":"white" ,
                fontSize:"14px",paddingTop:"8px ",textAlign:"center"}}>
            <MdLocalOffer className="text-warning" /> &nbsp;&nbsp; Free Home 
            Delivery on Order Above 500/- Rupees
          </h6>}
          <Nav  className="ms-auto pr-5 g-3 {theme=='light'?'text-dark':'text-light'} " >
            <LinkContainer id="nav1" to="/" style={{color:theme==='light'?'black':'white',fontSize:"14px"}}  activeClassName="">
           
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer id="nav1"  to="/about" className="pr-5" style={{color:theme==='light'?'black':'white',fontSize:"14px"}} activeClassName="">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer id="nav1"  style={{color:theme==='light'?'black':'white',fontSize:"14px"}} to="/contact" activeClassName="">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer id="nav1"  to="/policy" style={{color:theme==='light'?'black':'white',fontSize:"14px"}} activeClassName="">
              <Nav.Link>Terms and Policy</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="ms-auto me-5 ps-5">
            {
              currentUser && currentUser.isAdmin?(
                < >
                <p style={{color:theme==='light'?'black':'white',margin:"9px"}}>{currentUser.username}</p>
                <p style={{color:theme==='light'?'black':'white',margin:"9px",cursor:"pointer"}} onClick={()=>dispatch(logoutUser())}>Logout</p>
                </>
              ):(<>               {currentUser &&
                <Dropdown>
             <Dropdown.Toggle variant="" id="dropdown-basic" style={{color:theme==='light'?'black':'white'}}>
             {currentUser.username}
               </Dropdown.Toggle>

             <Dropdown.Menu>
      
         
        <Dropdown.Item href="/orders">Orders</Dropdown.Item>
      
        <Dropdown.Item href="#" onClick={()=>dispatch(logoutUser())}>Logout</Dropdown.Item> 
        
           </Dropdown.Menu>
             </Dropdown>}</>
               )                       
}
{ !currentUser &&
            <LinkContainer to="/login" activeClassName="" style={{color:theme==='light'?"black":"white"}}>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
}

           {currentUser && currentUser.isAdmin?(<>
           </>

           ):(
            <LinkContainer id="cart" to="/cart" activeClassName="">
              <Nav.Link><AiOutlineShoppingCart style={{color:theme==='light'?'black':'white',width:"40px"}} />
                 <span style={{color:theme==='light'?'black':'white',fontSize:"14px"}}>{cart?cart.length:"0"}</span>
               
                 </Nav.Link>
            </LinkContainer>)}
            <Form>

            
            <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
       
       style={{padding:"10px 50px" ,paddingLeft:"70px"}}
        onClick={changetheme}
      />
      </Form>

          </Nav>

        </Container>
      
      </Navbar>
      
    </>
  );
};




export default TopBar;