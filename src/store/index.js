import { configureStore } from "@reduxjs/toolkit";
import toggleBarsSlice from "./toggleBarsSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleBarsSlice,
  },
});
