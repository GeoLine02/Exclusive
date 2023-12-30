import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice/userSlice";
import productReduceer from "../features/productSlice/productSlice";

const store = configureStore({
  reducer: { user: userReducer, produts: productReduceer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
