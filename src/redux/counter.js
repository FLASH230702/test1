import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    sign: true,
    id: 100,
  },
  reducers: {
    Signin: (state) => {
      state.sign = false;
    },
    Signout: (state) => {
      state.sign = true;
    },
    change: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { Signin, Signout, change } = counterSlice.actions;

export default counterSlice.reducer;
