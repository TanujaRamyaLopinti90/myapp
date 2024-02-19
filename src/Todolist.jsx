import React from 'react';

 function Todolist(){
    var [todos,setTodos]=React.useState()
    function abc(){
       console.log(todos)
    setTodos([...todos, document.getElementedById("d1").value])
    }
    return(
        <div>
            <h1>Todolist</h1>
            <input type="text" id="d1"/>
            <button onClick={abc}>Add Todo</button>
            {
                todos.map( (a)=>{
                 return(
                 <li>{a}</li>
                 )
             })
            }

        </div>
      
    )   

 }
 export default Todolist