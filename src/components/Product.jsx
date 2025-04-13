// src/components/Product.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementAmount,
  decrementAmount,
} from "../app/feature/cardSlice";

function Product({ producttt }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isAdded = cart.find((item) => item.id === producttt.id);

  const handleBuy = (e) => {
    e.preventDefault();
    dispatch(addToCart({ ...producttt, amount: 1 }));
  };

  return (
    <div>
      <Link to={`/product/${producttt.id}`}>{producttt.title}</Link>
      {isAdded ? (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(incrementAmount(producttt.id));
            }}
          >
            +
          </button>
          <span>{isAdded.amount}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(decrementAmount(producttt.id));
            }}
          >
            -
          </button>
        </>
      ) : (
        <button onClick={handleBuy}>buy</button>
      )}
    </div>
  );
}

export default Product;
