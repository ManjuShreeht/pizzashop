import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../actions/cartAction';
import { addToCart, getCart } from './../actions/CartAction';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Pizza({pizza}) {
    const[quantity,setQuantity]=useState(1)
    const[varient,setvarient]=useState("small")

    const [show1, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate=useNavigate()

    // const a= useSelector();
    const userdata=useSelector(state=>state.userLoginReducer)
  const {currentUser}=userdata
  const {theme}=useSelector(state=>state.DarkReducer)
    
    const dispatch=useDispatch();
     
     
    const addtocart=()=>{
      if(currentUser){
      
      dispatch(addToCart(pizza,quantity,varient,currentUser))
      dispatch(getCart(currentUser));
      }else{
        toast.error('login to add cart')
        navigate('/login')
      }
    }
  return (
    <div   style={{height:"400px",width:"300px",backgroundColor:theme=='light'?"#3a3a3a":"white",overflowX: "hidden"}} 
     className="shadow-lg p-3 mb-5 pt-3  rounded" 
     >
       <div onClick={handleShow}style={{marginLeft:"40px"}} >
         <h5 style={{color:theme=='light'?"white":"black"}}  >{pizza.name}</h5>
        <img src={pizza.image} alt="pixa" className='img-fluid' style={{height:"170px" ,width:"180px", borderRadius:"10px",cursor:"pointer" }} />
        </div>
         <div className='flex-container' style={{marginTop:"7px"}}>
        <div className='w-100 m-1 p-1'>
            <p style={{color:theme=='light'?"white":"black"}}>Varients:</p>
            <select className='form-control'   value={varient} onChange={(e)=>setvarient(e.target.value)}>

            {pizza?.varients.map(v=>{
               return <option value={v}>{v}</option> 
            })}
            </select>
        </div>
        <div className='w-100 m-1 p-1'>
        <p style={{color:theme=='light'?"white":"black"}}>Quantity:</p>
        <select className='form-control' value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                {[...Array(10).keys()].map((x , i)=>{
                    return <option value={i+1}>{i+1}</option>
                })}
          
            </select>
        </div>

      </div>
      <div className='flex-container'>
        <div className='m-2 w-100'>
            <h6 style={{color:theme=='light'?"white":"black"}} className='mt-2'>Price :{pizza.prices[0][varient]*quantity} Rs/- </h6>
        </div>
        <div className='m-1 w-100'>
         <Button  className='btn btn1 text-light fs-7 fw-bolder'variant="warning" onClick={addtocart} >Add To Cart</Button>
        </div>

      </div>

      <Modal show={show1} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} style={{height:"350px"}} className="img-fluid" />
          <p style={{wordWrap:"break-word"}}>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
         <button className='btn' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Pizza
