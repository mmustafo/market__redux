import { configureStore } from "@reduxjs/toolkit";
import CartReducer from"../app/feature/cardSlice"
export const store = configureStore({
     reducer: {
          cart: CartReducer
     }
})