import { configureStore } from '@reduxjs/toolkit'
import counter from './reducer/counter'
export  const store = configureStore({
    reducer:{
            counter:counter,
            // payload:num
    },
})
export const number=(numval=1)=>{
    return{
        type:'counter',
        payload:numval
    }
}