import React from "react";

 var Third=React.forwardRef((props,refs)=>{
    return(
        <div className="mybox" >
        <h3>Third</h3>
        <input type="text" ref={refs}/>
        </div>
    )
})

export default Third