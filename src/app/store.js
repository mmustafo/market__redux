// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cardSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
