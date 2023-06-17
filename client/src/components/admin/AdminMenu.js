import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
const AdminMenu = () => {

    const userdata=useSelector(state=>state.userLoginReducer)
    const {currentUser}=userdata
    const {theme}=useSelector(state=>state.DarkReducer)
  
  return (
    <div style={{marginLeft:"120px"}} >
    <div className="text-center" >
      <div className="list-group " >
       
        <Link
          to="/getalluser"
          className="list-group-item list-group-item-action"
          style={{backgroundColor:theme=='light'?"black":"white",color:theme=='light'?"white":"black",padding:"20px"}} 
        >
         All Users List
        </Link>
        <Link
          to="/addnewpizza"
          className="list-group-item list-group-item-action"
          style={{backgroundColor:theme=='light'?"black":"white",color:theme=='light'?"white":"black",padding:"20px"}} 
        >
          Add New Pizza
        </Link>
        <Link
          to="/orderlist"
          className="list-group-item list-group-item-action"
          style={{backgroundColor:theme=='light'?"black":"white",color:theme=='light'?"white":"black",padding:"20px"}} 
        >
        All Orders List
        </Link>
        <Link
          to="/getall"
          className="list-group-item list-group-item-action"
          style={{backgroundColor:theme=='light'?"black":"white",color:theme=='light'?"white":"black",padding:"20px"}} 
        >
         All Pizzas List
        </Link>
      </div>
    </div>
  </div>
  );
};

export default AdminMenu;
