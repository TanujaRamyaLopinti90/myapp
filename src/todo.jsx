import React from "react";

function abc(){
    var [arr,setArr]=React.useState([])
    function abc(){
        console.log(arr)
        setArr([...arr,document.getElementById("d1").value])
    }
      return(
        <div>
            <h1>Todolist</h1>
            <input type="text" id="d1"/>
            <button onClick={abc}>ADD TODO</button>
          {
            arr.map((a)=>{
                return (
                 <li>{a}</li>
                )
            })
          }



    </div>
      )

}
export default Todolist

