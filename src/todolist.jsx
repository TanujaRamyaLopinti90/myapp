import React from "react";
 function Todolist(){
    var[todo,setTodo]=React.useState([])
    var inp=React.useRef('')

 function addtodo(){
   let newtd={
      title:inp.current.value,
      status:false
     }
  setTodo([...todo,newtd])
  inp.current.value=""
 }

 function del(ind){
  var temp=[...todo]
  temp.splice(ind,1)
  setTodo([...temp])
 }

 function done(ind){
    var temp=[...todo]
    temp[ind].status=true
    setTodo([...temp])
 } 
 function undo(ind){
   var temp=[...todo]
   temp[ind].status=false
   setTodo([...temp])
 }

    return(
<div>
    <h1>TODOLIST</h1>
    <input type="text" ref={inp} />
   <button onClick={(()=>{addtodo()})}>ADD</button>
   {
    todo.map((T,index)=>{
        return<li className={T.status===true?"text-decoration-line-through":""}>{T.title}
   {T.status===true?(<button onClick={()=>{undo(index)}}>UNDO</button>):(<button onClick={()=>{done(index)}}>DONE</button>)}
  <button onClick={()=>{del(index)}}>DELETE</button> 
        </li>
    })
   }
   </div>
    )}
 export default React.memo(Todolist)