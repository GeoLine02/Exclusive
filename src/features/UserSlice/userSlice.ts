import { createSlice } from "@reduxjs/toolkit";
import { decodeToken, toggleStorage } from "../../utils";
type InitialStateType = {
  isLogedIn: boolean;
  user: string | null;
  error: "";
  status: "idle" | "pending" | "succeeded" | "failed";
};

const initialState: InitialStateType = {
  isLogedIn: false,
  user: null,
  error: "",
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInAction: (state, actions) => {
      const token = actions.payload;
      const user = decodeToken(token) as unknown as string;
      toggleStorage(token);
      state.isLogedIn = true;
      state.error = "";
      state.status = "succeeded";
      state.user = user;
    },

    signOutAction: (state) => {
      state.isLogedIn = false;
      localStorage.removeItem("accessToken");
      state.status = "idle";
      state.error = "";
      state.user = null;
    },
  },
});

export const { signInAction, signOutAction } = userSlice.actions;
export default userSlice.reducer;
