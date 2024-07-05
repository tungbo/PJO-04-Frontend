import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "UserDetail",
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
