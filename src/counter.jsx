import React from "react";
 function Counter(){
    let [count,setCount]=React.useState(0)
    var inconst=()=>{
        setCount(count+1)
    }
    var deconst=()=>{
        setCount(count-1)
    }
    return(
        <div>
            <h1>Counter Component</h1>
            <span>count</span>
            <button onClick={inccount}>inc</button>
            <button onClick={deccount}>decc</button>
        </div>
    )
 }
 export default Counter