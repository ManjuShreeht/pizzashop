import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizza } from "../actions/pizzaAction";
import Pizza from "./Pizza";
import Loading from "./Loading";
import Error from "./Error";
import Filter from "./Filter";

const Pizzalist = () => {
  const pizza = useSelector((state) => state.getAllPizzasReducer);
  const dispatch = useDispatch();
  const { pizzas, error, loading } = pizza;
  // console.log(pizzas)
  const {theme}=useSelector(state=>state.DarkReducer)
  useEffect(() => {
    dispatch(getAllPizza());
  }, []);
  return (
    <div className="row justify-content-center " 
    style={{ backgroundColor:theme=='light'?"#fff":"#212529"}}>
      {loading &&<Loading />}
      
      {
        < >{pizzas &&  <Filter />}
         
          {pizzas?.map((pizza, i) => {
            return (
              <div className="col-md-3 m-4" key={pizza._id}>
                <div key={i}>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })}
        </>
      }
    </div>
  );
};

export default Pizzalist;
