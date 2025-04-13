import { useLoaderData, Link } from "react-router-dom";
import { axiosInstance } from "../utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementAmount,
  decrementAmount,
} from "../app/feature/cardSlice";

export const loader = async () => {
  try {
    const response = await axiosInstance("/products");
    return { products: response.data.products };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [] };
  }
};

function Home() {
  const { products } = useLoaderData();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="containerr">
      <ul className="flex flex-wrap mx-auto w-full">
        {products &&
          products.map((pro) => {
            const isAdded = cart.find((item) => item.id === pro.id);

            const handleBuy = (e) => {
              e.preventDefault();
              dispatch(addToCart({ ...pro, amount: 1 }));
            };
            return (
              <li className="p-5 min-w-[400px] min-h-[400px]" key={pro.id}>
                <div className="bg-amber-200 rounded-2xl shadow-xl shadow-amber-400 p-4">
                  <img
                    className="mx-auto w-58"
                    src={pro.thumbnail}
                    alt={pro.title}
                  />
                  <h2 className="text-center text-amber-500 font-bold max-w-[200px] mx-auto mb-2">
                    {pro.title}
                  </h2>
                  <h3 className="text-center text-amber-500 font-bold">
                    {pro.price}$
                  </h3>
                  <h4 className="text-center text-amber-500 font-bold pb-2">
                    {pro.brand}
                  </h4>

                  <div className="text-center pb-2">
                    <Link
                      to={`/product/${pro.id}`}
                      className="inline-block px-4 py-2 mt-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
                    >
                      Batafsil
                    </Link>
                  </div>

                  
                  <div className="flex justify-center items-center gap-3 mt-2">
                    {isAdded ? (
                      <>
                        
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(incrementAmount(pro.id));
                          }}
                          className="px-3 py-1 bg-green-500 text-white rounded"
                        >
                          +
                        </button>
                        <span className="font-bold text-amber-900">{isAdded.amount}</span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(decrementAmount(pro.id));
                          }}
                          className="px-3 py-1 bg-red-500 text-white rounded"
                        >
                          -
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={handleBuy}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Buy
                      </button>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Home;
