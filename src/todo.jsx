import React from "react";

function Todo({todo,index,del,done,undo,}){
    console.log("Todo")
    return(
        <div className="listDiv" id="a5">
            <li  style={{textDecoration:todo.status?"line-through":"none"}}>
            
                       {todo.task}

        <button id="a1" onClick={()=>(del(index))}>Delete</button>
        
        <button  id="a2"onClick={()=>(done(index))}>Done</button>

        <button  id="a3" onClick={()=>(undo(index))}>Undo</button>
        
        {/* <button onClick={()=>(edit(index))}>Edit</button> */}
         

        </li>

        </div>
    )

}

export default React.memo(Todo)

