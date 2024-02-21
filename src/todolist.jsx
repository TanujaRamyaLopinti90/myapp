import React from "react"
function Todolist() {
    var [arr, setarr] = React.useState(["tanuja", "ramya"])
    function abc(){
        setarr([...arr,document.getElementById("d1").value])
    }
    function del(i){
        var temp=[...arr]
        temp.splice(i,1)
        setarr([...temp])
    }
    
    return (
        <div>
            <h1>TODOLIST</h1>
            <input type="text" id="d1"/>
            <button onClick={abc}>ADD TODO</button>

            {
                arr.map((a,index)=> {
                    return <li>{a}
                    <button onClick={()=>{del(index)}}>Delete</button>
                    </li>
                })
            }
        </div>
    )
}

export default Todolist