
import React from "react";
import Product from "./Product";
import { useLoaderData } from "react-router-dom";

function ProductList() {
  const { data: { products } } = useLoaderData(); 

  if (!products) {
    return <div>No products available</div>; 
  }

  return (
    <div>
      {products.map((producttt) => ( 
        <Product key={producttt.id} producttt={producttt} /> 
      ))}
    </div>
  );
}

export default ProductList;
