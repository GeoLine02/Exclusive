import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice/userSlice";
import productReducer from "../features/productSlice/productSlice";

const store = configureStore({
  reducer: { user: userReducer, produts: productReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
