import React from "react";
import { increment,decrement } from "./src/App/reducer/counter";
import styles from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux'
export function counter(){
    const count=useSelector((state)=>state.counter.value)


    return(
       <>
        <button onClick={()=>useDispatch(increment())}></button>
        <button onClick={()=>useDispatch(decrement())}></button>
        </>
    )
}