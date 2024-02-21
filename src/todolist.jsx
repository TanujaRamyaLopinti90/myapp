import React from "react"
function Todolist() {
    var [arr, setarr] = React.useState(["tanuja", "ramya"])
    function abc(){
        setarr([...arr,document.getElementById("d1").value])
    }
    
    return (
        <div>
            <h1>TODOLIST</h1>
            <input type="text" id="d1"/>
            <button onClick={abc}>ADD TODO</button>

            {
                arr.map((a)=> {
                    return <li>{a}</li>
                })
            }
        </div>
    )
}

export default Todolist