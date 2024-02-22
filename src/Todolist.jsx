import React from "react";
import Todo from "./todo";

function Todolist(){
   var [todos,setTodos]=React.useState([
      {task:"chicken biriyani",stats:false},
      {task:"chicken frypiece biriyani",stats:false},
      {task:" chicken lollypop",stats:false},
      {task:"chicken tikka",stats:false}
   ])
   console.log(todos)
    
    function  addTodo(){
        const newTodo=document.getElementById("d1").value;
        var newValue=newTodo.value;
        setTodos([...todos,{task:newTodo,stats:false}]);
     }
       function del(ind){
        var temp=[...todos];
        temp.splice(ind,1);
        setTodos([...temp])
       }
         function done(ind){
            const temp=[...todos];
            temp[ind].stats=true;
            setTodos([...temp])
         }
         function undo(ind){
            const temp=[...todos]
            temp[ind].stats=false;
            setTodos([...temp])
         }
         
    
   return(
    <div className="mybox">
        <div className="head">
         
        </div>
        <div>
           <input type="text" id="d1"/>
           <button onClick={()=>{addTodo()}}>Add</button>
           </div>
            
    
       {     
        todos.map((todo,index)=>{
           return <Todo todo={todo} index={index} del={del} done={done} undo={undo} edit= {edit}></Todo> 
        })
    }
    </div>
    )
}
export default React.memo(Todolist)
 