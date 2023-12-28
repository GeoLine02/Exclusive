import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/UserSlice/userSlice";
import productSlice from "../features/productSlice/productSlice";

const store = configureStore({
  reducer: { user: userSlice, produts: productSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
