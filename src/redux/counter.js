import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    sign: true,
    id: 100,
    ud: 100,
    prod: 0,
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
      state.ud = action.payload;
    },
    prodchangeup: (state) => {
      state.prod += 1;
    },
    prodchangedown: (state) => {
      state.prod -= 1;
    },
  },
});

export const { Signin, Signout, change, prodchangeup, prodchangedown } =
  counterSlice.actions;

export default counterSlice.reducer;
