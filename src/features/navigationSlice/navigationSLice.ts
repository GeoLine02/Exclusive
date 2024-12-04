import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  isSidebarOpen: boolean;
};

const initialState: initialStateType = {
  isSidebarOpen: false,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSideBar } = navigationSlice.actions;
export default navigationSlice.reducer;
