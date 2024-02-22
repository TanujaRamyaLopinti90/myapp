import React from "react";
  
function Counter(){
    var[c,setC]=React.useState(0)

    function inc(){
        setC(c+1)

    //      setC((a)=>{
    //       console.log(a)
    //    document.getElementById("dd").style.display="block"
    //        setTimeout(()=>{
    //    document.getElementById("dd").style.display="none"
    //     },2000)
    //     return a+1
    //     })

    }

    function dec(){
        setC(c-1)
        // setC((a)=>{
        //     console.log(a)
        // document.getElementById("de").style.display="block"
        //     setTimeout(()=>{
        // document.getElementById("de").style.display="none"
        //     },2000)
        //     return a-1
        // })
    }
    function inc10(){
        for(var i=1;i<=10;i++){
            setC((a)=>{
                return a+1
            })
        }
    }

   return(
   <div className="mybox">
      <h1>Counter:{c}</h1>
      <button onClick={()=>(inc())}>Increment</button>
      <button onClick={()=>(dec())}>Decrement</button>
      <button onClick={()=>(inc10())}>Inc 10 times</button>

      {/* <div id="dd">
        <h3>Incremented.....</h3>
      </div>
      <div id="de">
          <h3>Decremented</h3>
      </div> */}
   </div>

   )
}
export default Counter