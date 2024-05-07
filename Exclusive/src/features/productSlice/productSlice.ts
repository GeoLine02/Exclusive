import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductDetailsType, ProductsType } from "../../types";
type initialStateType = {
  isProductsFetching: boolean;
  status: "idle" | "pending" | "succeeded" | "failed";
  products: null | SalesType;
  sales: null | SalesType;
  bestSellings: null | SalesType;
  cart: null | ProductDetailsType[];
  error: string | unknown;
  details: null | ProductDetailsType;
};

const initialState: initialStateType = {
  isProductsFetching: false,
  status: "idle",
  products: null,
  bestSellings: null,
  details: null,
  sales: null,
  cart: [],
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

// **********************
// BestSellings Fetching
// **********************

export const fetchBestSellings = createAsyncThunk<SalesType>(
  "products/fetchBestSellings",
  async () => {
    const resp = await fetch("https://dummyjson.com/products?limit=8");
    const data = resp.json();
    return data;
  }
);

// ***********************
// Products Fetching
// ***********************

export const fetchProductsData = createAsyncThunk<SalesType, number>(
  "products/fetchProducts",
  async (page) => {
    const resp = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${10 * page}`
    );
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
  reducers: {
    addToCartAction: (state, action) => {
      const item = state.cart?.some((item) => item.id === action.payload);
      if (!item) {
        state.cart?.push(action.payload);
      }
    },
    removeCartItemAction: (state, action) => {
      const item = state.cart?.filter((item) => item.id !== action.payload);
      if (item) {
        state.cart = item;
      }
    },
    clearCartAction: (state) => {
      state.cart = [];
    },
  },
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
      })
      .addCase(fetchBestSellings.pending, (state) => {
        state.isProductsFetching = true;
        state.status = "pending";
        state.bestSellings = null;
      })
      .addCase(fetchBestSellings.fulfilled, (state, action) => {
        state.isProductsFetching = false;
        state.status = "succeeded";
        state.bestSellings = action.payload;
      })
      .addCase(fetchBestSellings.rejected, (state, action) => {
        state.isProductsFetching = false;
        state.status = "failed";
        state.bestSellings = null;
        state.error = action.payload;
      });
  },
});

export const { addToCartAction, removeCartItemAction, clearCartAction } =
  productSlice.actions;
export default productSlice.reducer;
