import { createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../axios-client";
const initialState = {
    Pr3:[]
    }
 axiosClient.get('/slideProducts')
    .then(({data})=>{
      initialState.Pr3 = data.data
      console.log(data.data)
    })
    .catch(err=>{
      console.log(err)
    })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        
    },
})
export const {getProduct3} = authSlice.actions;
export default authSlice.reducer;