import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "PizzaDetail",
  initialState: {
    pizza: {},
  },
  reducers: {
    setPizza: (state, action) => {
      state.pizza = action.payload;
    },
  },
});
