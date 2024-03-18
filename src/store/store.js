import { configureStore } from "@reduxjs/toolkit";
import sliceRootReducer from "./rootSlice";
import sliceListReducer from "./listSlice";

export const store = configureStore({
  reducer: {
    root: sliceRootReducer,
    list: sliceListReducer
  },
});
