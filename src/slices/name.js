import { createSlice } from "@reduxjs/toolkit";

const initialState = {myname:"Naveen"}
export const counterSlice = createSlice({
    name:'setname',
    initialState,
    reducers:{
        addName:(state,action)=>{state.myname=action.payload}
    }
})

export const {addName} = counterSlice.actions

export default counterSlice.reducer