import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc, reset } from "./counterSlice";

function Counter(){
    var {count}=useSelector(state=>state.c)
    var dispatch=useDispatch()
    console.log(count)
    return(
        <div className="border border-primary m-2 m-2 p-2">
            <h2>COUNTER:{count}</h2>
            <button onClick={()=>{dispatch(inc())}}>Increment</button>
            <button onClick={()=>{dispatch(dec())}}>Decrement</button>
            <button onClick={()=>{dispatch(reset())}}>Reset</button>
        </div>
    )
}
export default Counter