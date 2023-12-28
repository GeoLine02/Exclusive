import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  isProductsFetching: boolean;
  status: "idle" | "pending" | "succeeded" | "failed";
  products: null | PayloadAction;
  sales: null | PayloadAction;
  cart: null;
  error: string | unknown;
};

const initialState: initialStateType = {
  isProductsFetching: false,
  status: "idle",
  products: null,
  sales: null,
  cart: null,
  error: "",
};

export const fetchSales = createAsyncThunk("produts/fetchSales", async () => {
  const resp = await fetch("https://dummyjson.com/products?limit=12&skip=35");
  const data = resp.json();
  return data;
});

export const fetchProductsData = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = resp.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.isProductsFetching = true;
        state.cart = null;
        state.products = null;
        state.status = "pending";
        state.error = "";
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.isProductsFetching = false;
        state.products = action.payload;
        state.status = "succeeded";
        state.error = "";
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.isProductsFetching = false;
        state.cart = null;
        state.products = null;
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchSales.pending, (state) => {
        state.isProductsFetching = true;
        state.status = "pending";
        state.error = "";
        state.sales = null;
      })
      .addCase(fetchSales.fulfilled, (state, action) => {
        state.isProductsFetching = false;
        state.error = "";
        state.status = "succeeded";
        state.sales = action.payload;
      })
      .addCase(fetchSales.rejected, (state, action) => {
        state.isProductsFetching = false;
        state.error = action.payload;
        state.sales = null;
        state.status = "failed";
      });
  },
});

export default productSlice.reducer;
