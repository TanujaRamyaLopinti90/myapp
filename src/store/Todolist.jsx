import React from "react";
import {connect} from 'react-redux'

function Todolist(props){
    console.log(props)
    return(
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text"/>
            <button>Add Todo</button>
            <ul>
                {
                    props.todolist.alltodos.map((todo)=>{
                        return  <li>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default connect(store=>store)(Todolist)