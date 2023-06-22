import { useDispatch, useSelector } from "react-redux";
import About from "./components/About";
import Caousel from "./components/Caousel";
import Contact from "./components/Contact";
import Pizzalist from "./components/Pizzalist";
import Policy from "./components/Policy";
import TopBar from "./components/TopBar";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Register from "./pages/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Admin from "./pages/Admin";
import AddNewPizza from "./components/admin/AddNewPizza";
import GetAll from "./components/admin/GetAll";
import EditPizza from "./components/admin/EditPizza";
import GetAllUser from "./components/admin/GetAllUser";

// import EditPizza from "./components/admin/EditPizza";
// import Pizzaslist from "./components/admin/Pizzalist";

import GetAllOrders from "./components/admin/GetAllOrders";
import { useEffect } from "react";
import { userLogin } from "./actions/UserAction";
import Example from "./pages/example";

function App() {
  const { loading, error, success } = useSelector(
    (state) => state.userLoginReducer
  );
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.userLoginReducer);
  const { currentUser, admin } = userdata;
 

 

  return (
    <>
      <ToastContainer />
      <TopBar />
      <Routes>
        {/* <Route
          path="/"
          element={[
            
            currentUser && currentUser.isAdmin ? (
              <Navigate to="/admin" />
              ) : (
              <Pizzalist />
            ),
          ]}
        /> */}

        <Route path="/about" element={[ <About />]} />
        <Route path="/contact" element={[ <Contact />]} />
        <Route path="/policy" element={[<Policy />]} />
        <Route
          path="/"
          element={<Example />}
        />
        <Route
          path="/register"
          element={[
            
            currentUser ? <Navigate to="/" /> : <Register />,
          ]}
        />
        <Route
          path="/cart"
          element={[
           
            currentUser ? <Cart /> : <Navigate to="/login" />,
          ]}
        />
        <Route
          path="/orders"
          element={[
           
            currentUser ? <Orders /> : <Navigate to="/login" />,
          ]}
        />

        <Route path="/admin" element={[currentUser && currentUser.isAdmin ?<Admin />:<Navigate to='/' />]} />

        <Route
          path="/addnewpizza"
          element={currentUser && currentUser.isAdmin ? <AddNewPizza /> : <Navigate to="/" />}
        />
        <Route path="/getall" element={currentUser && currentUser.isAdmin ?<GetAll />:<Navigate to="/" />} />
        <Route path="/admin/:id" element={currentUser && currentUser.isAdmin ?<EditPizza />:<Navigate to="/" />} />
        <Route path="/getalluser" element={currentUser && currentUser.isAdmin ?<GetAllUser />:<Navigate to="/" />} />
        <Route path="/orderlist" element={currentUser && currentUser.isAdmin ?<GetAllOrders />:<Navigate to="/" />} />
     
      </Routes>
     
    </>
  );
}

export default App;
