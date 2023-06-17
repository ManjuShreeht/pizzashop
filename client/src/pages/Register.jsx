import React, { useEffect, useState } from 'react'
import {  toast } from 'react-toastify';
import InputForm from '../components/shared/InputForm.js';
import { useDispatch, useSelector } from 'react-redux';
import { userRegisetr } from '../actions/UserAction.js';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Link } from 'react-router-dom';
import Loading from '../components/Loading.js';

const Register = () => {
  const {theme}=useSelector(state=>state.DarkReducer)
    const [username,setName]=useState('')
    const [mobile,setMobile]=useState('') 
     const [email,setEmail]=useState('') 
      const [password,setPassword]=useState('')     
      const dispatch=useDispatch()


        const reg=useSelector(state=>state.userRegisterRouter)
        const{loading,error,success}=reg


       
      const handleSubmit=(e)=>{
        e.preventDefault();
        
          if(!username || !mobile || !email || !password){
            return toast.error('please Provide all fields')
          }
          if(password.length<7){
            return toast.error('password should be more than 7 character')
          }
          if(mobile.length>0 && mobile.length<10  ){
            return toast.error('enter 10 digit phone number')
          }
         const user={
           username,
           email,
           mobile,
           password,
          
          }
          dispatch(userRegisetr(user))
          if(error){
            return  toast.error('User Already Exists')
            }else if(success){
              return  toast.success("registration successfull")
            }
      
        
     
      }

      
  return (
    <div style={{ backgroundColor:theme=='light'?"#fff":"#212529",height:"528px", overflow: "hidden"}}>
         <div style={{textAlign:"center",width:"250px" ,marginLeft:"550px"}}>

    
    {loading && <Loading />}
   
    </div>
        <h1 style={{textAlign:"center",marginTop:"2px" ,color:theme=='light'?"black":"white"}}>Register Page</h1>
 <div className='form-container' style={{width:"500px",margin:"3px auto"}}>
      
      

        <form className='card p-4 pt-0 pb-0 ' onSubmit={handleSubmit} style={{backgroundColor:theme=='light'?"#212529":"#fff"}}>
 
      <p style={{color:theme=='light'?"#fff":"black",marginBottom:"0px",paddingBottom:"0px",paddingTop:"0px" }}>Name</p>
      <InputForm 
      style={{paddingBottom:"0px",paddingTop:"0px" }}
      htmlFor="name"  type={'text'} value={username} name='name'
       handleChange={(e)=>setName(e.target.value)}
      />
       <p style={{color:theme=='light'?"#fff":"black",marginBottom:"0px",marginTop:"0px"}}>Mobile</p>
      <InputForm htmlFor="mobile"  type={'number'} value={mobile} name='mobile'
       handleChange={(e)=>setMobile(e.target.value)} />
        <p style={{color:theme=='light'?"#fff":"black",marginBottom:"0px"}}>Email</p>
        <InputForm htmlFor="email" type={'email'} value={email} name='email'
       handleChange={(e)=>setEmail(e.target.value)} />
        <p style={{color:theme=='light'?"#fff":"black",marginBottom:"0px"}}>Password</p>
        <InputForm htmlFor="password"  type={'password'} value={password} name='password'
       handleChange={(e)=>setPassword(e.target.value)} />
 
 
 
  
 <div className='d-flex justify-content-between' >
  <p style={{color:theme=='light'?"#fff":"black"}}>Already Register <Link to='/login' style={{color:theme=='light'?"#fff":"black"}}> Login Here</Link></p>
 
 
  <button type="submit" className="btn btn-primary"  >Register</button>
 </div>
</form>
</div>

    </div>
  )
}

export default Register