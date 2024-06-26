import { createSlice } from "@reduxjs/toolkit";


export default createSlice({
    name: "auth",
    initialState: {
        UserInfo: {}
    },
    reducers:{
        Login : (state,action)=>{
            state.UserInfo = action.payload
        }
        
    }
})