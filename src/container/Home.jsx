import React, { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";

const Home = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch ();
  console.log(products);
  const fetchData = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
      dispatch(setProducts(response.data))
  };
  
  useEffect(() =>{
    fetchData();
  }, []);
  console.log("products:", products)
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default Home;
