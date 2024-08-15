import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(`https://api.webroot.net.in/products.php`);
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (newProduct) => {
    const obj =  {
      method: "post",
      url: "https://api.webroot.net.in/products.php",
      data: newProduct,
      headers: { "Content-Type": "multipart/form-data" },
    };
  console.log(obj)
    // const response = await axios.post('https://api.webroot.net.in/products.php', newProduct);
    const response = await axios.post(obj);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
