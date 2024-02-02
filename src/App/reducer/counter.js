import { createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"
import { number } from "../store"
     const  initialState={
        value:0,
       

    }
    export const counterSlice =createSlice({
        name:'counter',
        initialState,
         reducers:{
            increment: (state,action,numval) => {
                
                number(numval)
                // alert(action.payload)
                state.value += parseInt(action.payload)
              },
              decrement: (state,action,numval) => {
                number(numval)
                // alert(action.payload)
                state.value -= parseInt(action.payload)
              },
           
    },
})
export const {increment,decrement}=counterSlice.actions;
export default counterSlice.reducer