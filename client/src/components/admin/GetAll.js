import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizza } from "../../actions/pizzaAction";
import Loading from "../Loading";
import Error from "../Error";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { deletePizza, getPizzaId } from "../../actions/adminAction";

const GetAll = () => {
  const userdata = useSelector((state) => state.userLoginReducer);
  const { currentUser } = userdata;
  const pizza = useSelector((state) => state.getAllPizzasReducer);
  const dispatch = useDispatch();
  const { pizzas, error, loading } = pizza;
  const {theme}=useSelector(state=>state.DarkReducer)

  useEffect(() => {
    dispatch(getAllPizza());
  }, []);

  const deletepizza = (id) => {
    dispatch(deletePizza(id));
  };
  return (
    <div className="container-fluid" style={{ backgroundColor:theme=="light"?"white":"black" }}>
      <h2 style={{ fontSize: "35px",color:theme=="light"?"black":"white" }} className="text-center mb-5">
        Pizzas List
      </h2>
      <div className="row justify-content-left ms-8" style={{ width:"80%" ,marginLeft:"150px",backgroundColor:theme=="light"?"black":"white"}}>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong" />
        ) : (
          <table className={`table table-striped border hover ${theme=="light"? "table-dark":"table-light" } `}  >
            <thead>
              <tr style={{color:theme=="light"?"black":"white" }}> 
                <th  scope="col">S/n</th>
                <th scope="col">Pizza Name</th>
                <th scope="col">Prices</th>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {pizzas &&
                pizzas.map((pizza) => (
                  <tr>
                    <td>
                      {" "}
                      <img
                        src={pizza.image}
                        alt="pizza"
                        width="100px"
                        height="100px"
                      />
                    </td>
                    <td>{pizza.name}</td>
                    <td>
                      Small :{pizza.prices[0]["small"]} <br />
                      Medium:{pizza.prices[0]["medium"]} <br />
                      Large:{pizza.prices[0]["large"]} <br />
                    </td>
                    <td>{pizza.category}</td>
                    <td >
                      <Link to={`/admin/${pizza?._id}`}>
                        <AiFillEdit onClick={()=>{
                          dispatch(getPizzaId(pizza._id));
                        }} style={{color:theme=="light"?"white":"black" }} />
                      </Link>{" "}
                      &nbsp;
                      <AiFillDelete onClick={() => deletepizza(pizza._id)} style={{cursor:"pointer"}} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default GetAll;
