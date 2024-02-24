import React from "react";

function Arth(){
    var ref1=React.useRef();
    var ref2=React.useRef();
    var [res,setRes]=React.useState(0)
    React.useEffect(()=>{
        ref1.current.focus();
    },[])
    function add(){
     setRes(+ref1.current.value+ +ref2.current.value)
    }

    return(
        <div className="mybox">
            <h1>Arth</h1>
            <input type="text" ref={ref1} onKeyUp={(e)=>{e.key==="Enter" && ref2.current.focus()}}/>
            <br />
            <input type="text" ref={ref2} onKeyUp={(e)=>{e.key==="Enter" && add()}}/>
            <br/>
            <button>Add</button>
            <h1>Result:{res}</h1>
        </div>
    )
}
export default Arth