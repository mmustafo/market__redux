import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../app/feature/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../app/store";
function Product({ producttt }) {
  const handelBuy = (e) => {
    const dispatch = useDispatch();
    const { cart } = useSelector((store) => store.cart);
    const isAdded = cart.find((i) => i.id == producttt.id);
    e.preventDefault();
    dispatch(addToCart({ ...producttt, amount: 1 }));
  };
  return (
    <div>
      <Link to={`/producttt/${producttt.id}`}></Link>
      {isAdded && (
        <>
          <button
            onClick={(e) => {
              dispatch(incirimentAmout(producttt.id)), e.preventDefault();
            }}
          >
            +
          </button>
          <span>{isAdded.amount}</span>
          <button
            onClick={(e) => {
              dispatch(decrimenttAmout(producttt.id));
              e.preventDefault();
            }}
          >
            -
          </button>
        </>
      )}
      {isAdded && <button onClick={(e) => handelBuy}></button>}
    </div>
  );
}

export default Product;
