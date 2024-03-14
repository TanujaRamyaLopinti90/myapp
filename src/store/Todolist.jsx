import { connect } from "react-redux";
import React from "react";


function Todolist(props){
    console.log("Todolist props::",props)
    return(
        <div className="border border-2 border-2 border-primary p-2 m-2">
            <h2>TODOLIST</h2>
            <input type="text"  onKeyUp={(e)=>{props.dispatch({type:'UPDATENEWTODO',payload:e.target.value})}}     />
            <button onClick={()=>{props.dispatch({type:'ADDTODO'})}}>Add Todo</button>
            <ol>
                {
                    props.todolist && props.todolist.todos.map((t,i)=>{
                        return(
                        <li>
                            {t}
                           <button onClick={()=>props.dispatch({type:'DELETETODO',index:i})}>Del</button> 
                            </li>
                        )

                    })
                }
            </ol>
        </div>
    )
}
export default connect(function(store){return store})(Todolist)