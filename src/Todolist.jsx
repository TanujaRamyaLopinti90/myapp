import React from "react";
import Todo from "./todo";

function Todolist(){
   var [todos,setTodos]=React.useState([
      {task:"chicken biriyani",status:false},
      {task:"chicken frypiece biriyani",status:false},
      {task:" chicken lollypop",status:false},
      {task:"chicken tikka",status:false}
   ])
   console.log(todos)
    
    function  addTodo(){
        const newTodo=document.getElementById("d1").value;
        var newValue=newTodo.value;
        setTodos([...todos,{task:newTodo,status:false}]);
     }
       function del(ind){
        var temp=[...todos];
        temp.splice(ind,1);
        setTodos([...temp])
       }
         function done(ind){
            const temp=[...todos];
            temp[ind].status=true;
            setTodos([...temp])
         }
         function undo(ind){
            const temp=[...todos]
            temp[ind].status=false; 
            setTodos([...temp])
         }
         
    
   return(
    <div className="mybox">
        <div className="head">
         
        </div>
        <div>
           <input type="text" id="d1"/>
           <button id="a4" onClick={()=>{addTodo()}}>Add</button>
           </div>
           
            
        {
           
        todos.map((todo,index)=>{
         return <Todo todo={todo} index={index} del={del} done={done} undo={undo}></Todo>
        })
      }
      </div>  
      
   
   ) 
    
}
export default React.memo(Todolist)
 