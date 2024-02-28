import React from "react";
 function Counter(){
    let [count,setCount]=React.useState(0)
    var incCount = () =>{
        setCount(count+1)
    }
    var decCount = () =>{
        setCount(count-1)
    }
    return(
        
        <div>
            <h1>Counter Component</h1>
            <span>{count}</span>
            <button onClick={incCount}>inc</button>
            <button onClick={decCount}>decc</button>
        </div>
        
    )
 }
 export default Counter