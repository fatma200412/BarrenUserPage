import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import wishlistReducer from "./slices/saveSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    wishlist: wishlistReducer,
  },
});
