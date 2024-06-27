import {createSlice} from "@reduxjs/toolkit"
export default createSlice({
    name:"ProductDetail",
    initialState:{
        product:{}
    },
    reducers:{
        setProduct:(state,action)=>{
            state.product=action.payload
            }
    }
})