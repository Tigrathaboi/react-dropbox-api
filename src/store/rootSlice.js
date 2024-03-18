import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "/",
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    changeRoot: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeRoot } = rootSlice.actions;

export default rootSlice.reducer;
