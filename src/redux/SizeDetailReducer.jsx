import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "SizeDetail",
  initialState: {
    size: {},
  },
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
    },
  },
});
