import React from "react";

function Todolist(){
    var [arr,setArr]=React.useState([])
    function abc(){
        console.log(arr)
        setArr([...arr,document.getElementById("d1").value])
    }
    function del(i){
      var temp=[...arr]
      temp.splice(i,1)
      setArr([...temp])
    }
      return(
        <div>
            <h1>Todolist</h1>
            <input type="text" id="d1"/>
            <button onClick={abc}>ADD TODO</button>
          {
            arr.map((a,index)=>{
                return (
                 <li>{a}
                 <button onClick={()=>{del(index)}}>DELETE</button>
                 </li>
                )
            })
          }



    </div>
      )

}
export default Todolist

