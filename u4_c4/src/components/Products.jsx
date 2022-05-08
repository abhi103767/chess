import axios from "axios";
import React, { useEffect, useState } from "react";
import { getProductsData } from "../Redux/actions";
import { filterProducts } from "../Redux/actions";
import { useSelector } from "react-redux";
import { Select } from "./Styled";
import { Grid } from "./Styled";
import { useDispatch } from "react-redux";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const dispatch = useDispatch();
  const name = window.location.pathname.split('/');
  const [isflag, setIsFlag] = useState(false);
  const products = useSelector(store => store);
  const data = useSelector(store => store.filterData)
  console.log(data);

  useEffect(() => {
    axios.get('https://movie-fake-server.herokuapp.com/products').then(
      (res) => {
        dispatch(getProductsData(res.data))
        setIsFlag(!isflag)
      }
    )
  }, []);

  useEffect(() => {

    dispatch(filterProducts(name[name.length - 1]))

  }, [name[name.length - 1], isflag])





  const handleSort = (e) => {

    if (e.target) dispatch(filterProducts(e.target.name));


  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {data.map((item) => {
          return <ProductCard key={item.id} item={item} />
        })}
      </Grid>
    </>
  );
};




