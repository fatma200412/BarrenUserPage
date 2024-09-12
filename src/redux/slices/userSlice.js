import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginUser: localStorage.getItem("token") !== null,
  userPageInfo: JSON.parse(localStorage.getItem("userPageInfo")) || {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoginUser = true;
      state.userPageInfo = action.payload;
      // localStorage.setItem("token", true);
      localStorage.setItem("userPageInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLoginUser = false;
      state.userPageInfo = {};
      localStorage.removeItem("userPageInfo");
      localStorage.removeItem("isLoginUser");
      localStorage.removeItem("userRole");
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
