import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(product => product.pid === action.payload.pid);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
