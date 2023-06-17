import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InputForm from "../components/shared/InputForm";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userLogin } from "../actions/UserAction";
import Loading from "./../components/Loading";
import Error from "../components/Error";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {theme}=useSelector(state=>state.DarkReducer)
  const { loading, error, success } = useSelector(
    (state) => state.userLoginReducer
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("please Provide all fields");
    }

    // dispatch(showLoading())
    const user = {
      email,
      password,
    };
    dispatch(userLogin(user));
  
   
  };

  return (
    <div style={{ backgroundColor:theme=='light'?"#fff":"#212529",height:"528px", overflow: "hidden"}}>
      <div style={{ textAlign: "center", width: "300px", marginLeft: "550px" }}>
        {loading && <Loading />}
      </div>
      <h1 style={{ textAlign: "center", marginTop: "50px" ,color:theme=='light'?"black":"white"}}>Login Page</h1>

      <div
        className="form-container"
        style={{ width: "500px", margin: "50px auto" }}>
        <form className="card p-5" onSubmit={handleSubmit}
        style={{backgroundColor:theme=='light'?"#212529":"#fff"}}>
        <p style={{color:theme=='light'?"#fff":"black",marginBottom:"0px",paddingBottom:"0px",paddingTop:"0px" }}>Email</p>
      
          <InputForm
            htmlFor="email"
            type={"email"}
            value={email}
            name="email"
            handleChange={(e) => setEmail(e.target.value)}
          />
<p style={{color:theme=='light'?"#fff":"black",marginBottom:"0px",paddingBottom:"0px",paddingTop:"0px" }}>Password</p>
      
          <InputForm
            htmlFor="password"
            
            type={"password"}
            value={password}
            name="password"
            handleChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-flex justify-content-between">
            <p style={{color:theme=='light'?"#fff":"black"}}>
              Not Register Yet<Link to="/register" style={{color:theme=='light'?"#fff":"black"}}> Register Here</Link>
            </p>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
