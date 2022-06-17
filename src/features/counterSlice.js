import { createSlice } from "@reduxjs/toolkit";


export const counterSlice=createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        inc:(state)=>{
            state.value++;
        }

        ,dec:(state)=>{
            state.value--;
        }
    }
})

export const {inc,dec} = counterSlice.actions

export default counterSlice.reducer