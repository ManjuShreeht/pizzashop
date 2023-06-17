import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'


import { useSelector } from 'react-redux'
import AdminMenu from '../components/admin/AdminMenu'

const Admin = () => {
    const userdata=useSelector(state=>state.userLoginReducer)
    const {currentUser}=userdata
    const admindata=useSelector(state=>state.userLoginReducer)
    const {admin}=admindata

    const {theme}=useSelector(state=>state.DarkReducer)
  return (
    <div className='container-fluid'style={{backgroundColor:theme=='light'?"white":"black",height:"89vh",paddingTop:"20px"}}>

<div style={{paddingTop:"70px"}} >
        <div className="row">
        <h4 style={{textAlign:"center",color:theme=="light"?"black":"white",marginBottom:"50px"}}>Admin Panel</h4>
          <div className="col-md-5 pt-7">
            <AdminMenu />
          </div>
          <div className="col-md-6 pt-8" >
            <div className="card "style={{backgroundColor:theme=="light"?"black":"white",textAlign:"center",padding:"80px"}} >
            {admin && (
              <div >
        <h5 style={{color:theme=="light"?"white":"black"}}>{currentUser.username}</h5>
<h5 style={{color:theme=="light"?"white":"black"}}> Admin Email : {currentUser.email}</h5>
 <h5  style={{color:theme=="light"?"white":"black"}}> Admin Contact : {currentUser.mobile}</h5>
 </div>
      )}
              
             
            </div>
          </div>
        </div>
      </div>
  
</div>
      
 
  )
}

export default Admin