import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Loading from "../Loading";
import Error from "../Error";
import Success from "../Success";
import { editPizza, getPizzaId } from "../../actions/adminAction";
import { getAllPizza } from "../../actions/pizzaAction";

const EditPizza = () => {
  const { id } = useParams();

  const single = useSelector((state) => state.getIdPizzasReducer);
  const { singleItem } = single;
  const dispatch = useDispatch();
 

  const small = singleItem[0] && singleItem[0].prices[0].small;
   const large=singleItem&& singleItem[0].prices[0].large
   const medium=singleItem && singleItem[0].prices[0].medium
  // console.log(singleItem[0].prices[0].small)
  const [name, setname] = useState(singleItem[0].name);
  const [smallPrice, setsmallPrice] = useState(small);
  const [largprice, setlargprice] = useState(large);
  const [mediumPrice, setmediumPrice] = useState(medium);
  const [image, setimage] = useState(singleItem[0].image);
  const [description, setdescription] = useState(singleItem[0].description);
  const [category, setcategory] = useState(singleItem[0].category);

  const editPizzaState = useSelector((state) => state.editPizzasReducer);
  const { loading, error, success } = editPizzaState;
  const { theme } = useSelector((state) => state.DarkReducer);

  useEffect(() => {
    dispatch(getPizzaId(id));
    // setname(singleItem[0].name)
    
  }, [id]);
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

    dispatch(editPizza(pizza, id));
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: theme == "light" ? "white" : "black" }}>
      {loading && <Loading />}
      {error && <Error error="add new pizza error" />}
      {success && <Success success="Pizza Added Successfully" />}
      <div
        className=" row justify-content-center m-10 p-5"
        style={{ paddingLeft: "300px" }}>
        <h2
          style={{
            fontSize: "35px",
            textAlign: "center",
            color: theme == "light" ? "black" : "white",
          }}>
          Add New Pizza
        </h2>

        <form
          className=" row  p-4"
          onSubmit={submitForm}
          style={{
            backgroundColor: theme == "light" ? "black" : "white",
            width: "500px",
          }}>
          <div className="row  align-items-center  mb-3  ">
            <div class="col-auto ">
              <label
                htmlFor="exampleInputEmail1"
                classname="form-label m-5 p-4 "
                style={{ color: theme == "light" ? "white" : "black" }}>
                Name
              </label>
            </div>
            <div class="col-md-8" style={{ marginLeft: "58px" }}>
              <input
                type="text"
                className="form-control h-5 w-8 col-md-8"
                value={name}
                id="exampleInputEmail1"
                onChange={(e) => setname(e.target.value)}
              />
            </div>
          </div>
          <div className="row  align-items-center  mb-3 ">
            <div class="col-auto ">
              <label
                htmlFor="exampleInputEmail1"
                classname="form-label"
                style={{ color: theme == "light" ? "white" : "black" }}>
                Small Price
              </label>
            </div>
            <div class="col-md-8" style={{ marginLeft: "26px" }}>
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
              <label
                htmlFor="exampleInputEmail1"
                classname="form-label"
                style={{ color: theme == "light" ? "white" : "black" }}>
                Medium Price
              </label>
            </div>
            <div class="col-md-8  " style={{ marginLeft: "4px" }}>
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
              <label
                htmlFor="exampleInputEmail1"
                classname="form-label"
                style={{ color: theme == "light" ? "white" : "black" }}>
                Large Price
              </label>
            </div>
            <div class="col-md-8 " style={{ marginLeft: "25px" }}>
              <input
                type="text"
                className="form-control"
                value={largprice}
                onChange={(e) => setlargprice(e.target.value)}
                placeholder="enterlarge pizza price"
              />
            </div>
          </div>

          <div className="row  align-items-center  mb-3 ">
            <div class="col-auto ">
              <label
                htmlFor="exampleInputEmail1"
                classname="form-label"
                style={{ color: theme == "light" ? "white" : "black" }}>
                Image
              </label>
            </div>
            <div class="col-md-8 " style={{ marginLeft: "60px" }}>
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
              <label
                htmlFor="exampleInputEmail1"
                classname="form-label"
                style={{ color: theme == "light" ? "white" : "black" }}>
                Description
              </label>
            </div>
            <div class="col-md-8 " style={{ marginLeft: "25px" }}>
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
              <label
                htmlFor="exampleInputEmail1"
                classname="form-label"
                style={{ color: theme == "light" ? "white" : "black" }}>
                Category
              </label>
            </div>
            <div class="col-md-8 " style={{ marginLeft: "40px" }}>
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
            style={{ width: "200px", margin: "30px 150px" }}>
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPizza;
