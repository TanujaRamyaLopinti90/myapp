import React from "react"
function Todolist() {
    var [arr, setarr] = React.useState(["tanuja", "ramya"])
    return (
        <div>
            {
                arr.map((a)=> {
                    return <li>{a}</li>
                })
            }
        </div>
    )
}

export default Todolist