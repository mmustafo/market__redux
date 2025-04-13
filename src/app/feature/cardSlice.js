// src/app/feature/cardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingItem = state.cart.find((item) => item.id === payload.id);
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.cart.push(payload);
      }
    },
    incrementAmount: (state, { payload }) => {
      const item = state.cart.find((i) => i.id === payload);
      if (item) item.amount += 1;
    },
    decrementAmount: (state, { payload }) => {
      const item = state.cart.find((i) => i.id === payload);
      if (item) {
        if (item.amount > 1) {
          item.amount -= 1;
        } else {
          state.cart = state.cart.filter((i) => i.id !== payload);
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    deleteCartItem: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
  },
});

export const {
  addToCart,
  incrementAmount,
  decrementAmount,
  clearCart,
  deleteCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
