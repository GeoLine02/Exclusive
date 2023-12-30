import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductDetailsType, ProductsType } from "../../types";
type initialStateType = {
  isProductsFetching: boolean;
  status: "idle" | "pending" | "succeeded" | "failed";
  products: null | PayloadAction;
  sales: null | SalesType;
  cart: null;
  error: string | unknown;
  details: null | ProductDetailsType;
};

const initialState: initialStateType = {
  isProductsFetching: false,
  status: "idle",
  products: null,
  details: null,
  sales: null,
  cart: null,
  error: "",
};

type SalesType = {
  limit: number;
  products: ProductsType[];
  skip: number;
  total: number;
};

// **********************
//  Sales Fetching
// **********************

export const fetchSales = createAsyncThunk<SalesType>(
  "produts/fetchSales",
  async () => {
    const resp = await fetch("https://dummyjson.com/products?limit=8&skip=20");
    const data = resp.json();
    return data;
  }
);

// ***********************
// Products Fetching
// ***********************

export const fetchProductsData = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = resp.json();
    return data;
  }
);

// ************************
//  Product Details Fetch
// ************************

export const fetchProductsDetails = createAsyncThunk<
  ProductDetailsType,
  string
>("products/fetchProductsDetails", async (id) => {
  const resp = await fetch(`https://dummyjson.com/products/${id}`);
  const data = resp.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.isProductsFetching = true;
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
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchSales.pending, (state) => {
        state.isProductsFetching = true;
        state.status = "pending";
      })
      .addCase(fetchSales.fulfilled, (state, action) => {
        const sales = action.payload;
        state.isProductsFetching = false;
        state.status = "succeeded";
        state.sales = sales;
      })
      .addCase(fetchSales.rejected, (state, action) => {
        state.isProductsFetching = false;
        state.error = action.payload;
        state.sales = null;
        state.status = "failed";
      })
      .addCase(fetchProductsDetails.pending, (state) => {
        state.isProductsFetching = true;
        state.status = "pending";
      })
      .addCase(fetchProductsDetails.fulfilled, (state, action) => {
        state.isProductsFetching = false;
        state.status = "succeeded";
        const details = action.payload;
        state.details = details;
      })
      .addCase(fetchProductsDetails.rejected, (state, action) => {
        state.isProductsFetching = false;
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
