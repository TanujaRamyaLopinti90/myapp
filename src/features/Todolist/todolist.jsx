import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";

function Todolist(){
  var {todolist}=useSelector(state=>state.t)
  var dispatch=useDispatch()
 var [newtodo,setNewtodo]=useState('')
   console.log(todolist)
    return(
        <div className="border border-secondary m-2 m-2 p-2">
            <h2>TODOLISt</h2>
            <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}  className="btn btn-outline-primary p-2 m-2" />
            <button onClick={()=>{dispatch(addTodo(newtodo))}}  className="btn btn-secondary p-2 m-2"> Add Todo</button>
            {
                todolist?.map((t,i)=>{
                return<li>
                    {t}
            <button onClick={()=>{dispatch(deleteTodo(i))}}  className="btn btn-info p-2 m-2">Delete</button>
                    </li>
                })
            }

        </div>
    )
}
export default Todolist
