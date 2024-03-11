import { connect } from "react-redux";
import React from "react";
  
function Counter(props){
    console.log(props)

    function inc(){
    props.dispatch({type:'INC'})
    }
    function dec(){
        props.dispatch({type:'DEC'})
    }   
    
    function reset(){
        props.dispatch({type:'RESET'})
    }
    
    return(
        <div className="betterview">
           <h1>Count:{props.counter.count}</h1>
           <button onClick={inc}>Increment</button>&nbsp;&nbsp;&nbsp;
           <button onClick={dec}>Decrement</button>&nbsp;&nbsp;&nbsp;  
           <button onClick={reset}>Reset</button>&nbsp;&nbsp;&nbsp; 
        </div>
    )
}
export default connect(function(store){return store}) (Counter)