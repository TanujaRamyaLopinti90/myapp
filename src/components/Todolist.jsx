import React from "react";
import { connect } from "react-redux";
import { addtodo,deletetodo } from "../store/action";

function Todolist(props){
    const [newtask,setNewtask]=React.useState('')
    function addTask(){
    // props.dispatch({type:'ADDTASK',payload:newtask})
    props.dispatch(addtodo(newtask))
    }
    function deleteTask(i){             
        // props.dispatch({type:'DELETETASK',payload:i})
        props.dispatch(deletetodo(i))
    }
    return(
        <div className="betterview">
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNewtask(e.target.value)}}/>
        <button onClick={addTask}>ADD TASK</button>
        {
            props.todos.todos.map((t,i)=>{
                return(<li key={i}>
                    {t}
                    <button onClick={()=>{deleteTask(i)}}>delete</button>
                    </li>)
            })
        }
        
        </div>
    )     
    
}
export default connect(function(store){return store}) (Todolist)