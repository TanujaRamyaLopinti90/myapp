import React from "react"

function Counter(){
    var [c,SetC]=React.useState(0)

    function inc(){
        SetC(c+1)
    }
    function dec(){
        SetC(c-1)
    }

return(
 <div>
    <h1>Counter:{c}</h1>
    <button onClick={()=>inc()}>increment</button>
    <button onClick={()=>dec()}>decrement</button>
    
      </div>
)
    }
export default Counter