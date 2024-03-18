import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    changeList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeList } = listSlice.actions;

export default listSlice.reducer;
