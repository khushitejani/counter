import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { number } from "./App/store";


// import { increment,decrement } from "./App/reducer/counter";
import { increment,decrement } from "./App/reducer/counter";
import { getByDisplayValue } from "@testing-library/react";
  // import styles from './Counter.module.css'

function App() {
      
      const count=useSelector((state)=>state.counter.value)
      const dispatch=useDispatch()
      const [num, setnum  ] = useState("");
      return(
         <>
          <input type="text" value={num}  onChange={(e)=>setnum(e.target.value)}></input>
          <h1>count:{count}</h1>
          <button onClick={()=> dispatch(increment(num)) }   >increment</button>
          <button onClick={()=>dispatch(decrement( num))}> decrement</button>
          </>
      )
  }


export default App;
