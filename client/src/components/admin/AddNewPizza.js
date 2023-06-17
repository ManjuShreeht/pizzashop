import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../Loading";
import Error from "../Error";
import Success from "../Success";
import { addPizza } from "../../actions/adminAction";

const AddNewPizza = () => {
  const [name, setname] = useState("");
  const [smallPrice, setsmallPrice] = useState();
  const [largprice, setlargprice] = useState();
  const [mediumPrice, setmediumPrice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const addPizzaState = useSelector((state) => state.AddPizzasReducer);
  const { loading, error, success } = addPizzaState;

  const dispatch = useDispatch();
  const {theme}=useSelector(state=>state.DarkReducer)

  const submitForm = (e) => {
    e.preventDefault();
    console.log(name);
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largprice,
      },
    };

    dispatch(addPizza(pizza));
  };
  return (
    
    <div className="container-fluid " style={{backgroundColor:theme=="light"?"white":"black" }}>
      {loading && <Loading />}
      {error && <Error error="add new pizza error" />}
      {success && <Success success="Pizza Added Successfully" />}
      <div
        className=" row justify-content-center m-10 p-5"
        style={{width:"700px",marginLeft:"300px"}}>
        <h2 style={{ fontSize: "35px", textAlign: "center",color:theme=="light"?"black":"white" }}>Add New Pizza</h2>

        <form className=" row  p-4" onSubmit={submitForm} style={{backgroundColor:theme=="light"?"black":"light" }}>
          <div className="row  align-items-center  mb-3  ">
            <div class="col-auto ">
              <label
                htmlFor="exampleInputEmail1"
                classname="form-label m-5 p-4 "
                style={{color:theme=="light"?"white":"black" }}>
                Name
              </label>
            </div>
            <div class="col-md-8" style={{ marginLeft: "68px" }}>
              <input
                type="text"
                className="form-control h-5 w-8 col-md-8"
                value={name}
                id="exampleInputEmail1"
                onChange={(e) => setname(e.target.value)}
                placeholder="enter pizza name"
              />
            </div>
          </div>
          <div className="row  align-items-center  mb-3 ">
            <div class="col-auto ">
              <label htmlFor="exampleInputEmail1" classname="form-label"  style={{color:theme=="light"?"white":"black" }}>
                Small Price
              </label>
            </div>
            <div class="col-md-8" style={{ marginLeft: "34px" }}>
              <input
                type="text"
                className="form-control"
                value={smallPrice}
                onChange={(e) => setsmallPrice(e.target.value)}
                placeholder="enter  small pizza price"
              />
            </div>
          </div>
          <div className="row  align-items-center  mb-3 ">
            <div class="col-auto ">
              <label htmlFor="exampleInputEmail1" classname="form-label"  style={{color:theme=="light"?"white":"black" }}>
                Medium Price
              </label>
            </div>
            <div class="col-md-8  " style={{ marginLeft: "14px" }}>
              <input
                type="text"
                className="form-control"
                value={mediumPrice}
                onChange={(e) => setmediumPrice(e.target.value)}
                placeholder="enter medium pizza price"
              />
            </div>
          </div>
          <div className="row  align-items-center  mb-3 ">
            <div class="col-auto ">
              <label htmlFor="exampleInputEmail1" classname="form-label"  style={{color:theme=="light"?"white":"black" }}>
                Large Price
              </label>
            </div>
            <div class="col-md-8 " style={{ marginLeft: "32px" }}>
              <input
                type="text"
                className="form-control"
                value={largprice}
                onChange={(e) => setlargprice(e.target.value)}
                placeholder="enterlarge pizza price"
              />
            </div>
          </div>

          <div className="row  align-items-center  mb-3 "  style={{color:theme=="light"?"white":"black" }}>
            <div class="col-auto ">
              <label htmlFor="exampleInputEmail1" classname="form-label">
                Image
              </label>
            </div>
            <div class="col-md-8 " style={{ marginLeft: "65px" }}>
              <input
                type="text"
                className="form-control"
                value={image}
                onChange={(e) => setimage(e.target.value)}
                placeholder="enter image URL"
              />
            </div>
          </div>
          <div className="row  align-items-center  mb-3 ">
            <div class="col-auto ">
              <label htmlFor="exampleInputEmail1" classname="form-label"  style={{color:theme=="light"?"white":"black" }}>
                Description
              </label>
            </div>
            <div class="col-md-8 " style={{ marginLeft: "30px" }}>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                placeholder="enter descriptione"
              />
            </div>
          </div>
          <div className="row  align-items-center  mb-3 ">
            <div class="col-auto ">
              <label htmlFor="exampleInputEmail1" classname="form-label"  style={{color:theme=="light"?"white":"black" }}>
                Category
              </label>
            </div>
            <div class="col-md-8 " style={{ marginLeft: "44px" }}>
              <input
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                placeholder="enter category"
              />
            </div>
          </div>

          <button
            className="btn btn-success "
            type="submit"
            style={{ width: "200px", margin: "30px 150px" }}  >
            ADD NEW
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewPizza;
