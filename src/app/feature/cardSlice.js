import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmout: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: cart,
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    incirimentAmout: (state, { payload }) => {
     const item = state.cart.find((i) => i.id == payload);
     item.amount+= 1
    },
    decrimenttAmout: (state, { payload }) => {
      const item = state.cart.find((i) => i.id == payload);
      item.amount-= 1
     },
    cleareCart: () => {},
    deleteCart: () => {},
  },
});

export default cartSlice.reducer;
