import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice/userSlice";
import productReducer from "../features/productSlice/productSlice";
import navigationReducer from "../features/navigationSlice/navigationSLice";

const store = configureStore({
  reducer: {
    user: userReducer,
    produts: productReducer,
    naviagtion: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
