import React from "react";
 function Todolist(){
    var[todo,setTodo]=React.useState([])
    var inp=React.useRef('')

 function addtodo(){
  setTodo([...todo,inp.current.value])
  inp.current.value=""
 }

 function del(ind){
  var temp=[...todo]
  temp.splice(ind,1)
  setTodo([...temp])
 }

 function done(index){
    var temp=[...todo]
    temp[index].status=true
    setTodo([...temp])
 }

    return(
<div>
    <h1>TODOLIST</h1>
    <input type="text" ref={inp} />
   <button onClick={(()=>{addtodo()})}>ADD</button>
   {
    todo.map((T,index)=>{
        return<li className={T.status===true?"text-decoration-line-through":""}>{T}
     <button onClick={()=>{del()}}>DELETE</button>   
     <button onClick={()=>{done()}}>DONE</button>   
        </li>
    })
   }
   </div>
    )}
 export default Todolist