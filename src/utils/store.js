import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import showProgressBarSlice from "./showProgressBarSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    showProgressBar: showProgressBarSlice,
  },
});

export default store;
