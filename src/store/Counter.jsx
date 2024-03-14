import { connect } from "react-redux";
import React from "react";


function Counter(props){
    console.log(props)
    return(
        <div className="border border-2 border-2 border-info p-2 m-2">
            <h2>Counter:{props.counter.count}</h2>
            <button onClick={()=>{props.dispatch({type:'INCREMENT'})}}>Inc</button>
            <button onClick={()=>{props.dispatch({type:'DECREMENT'})}}>Dec</button>
            <button onClick={()=>{props.dispatch({type:'RESET'})}}>Reset</button>
        </div>
    )
}
export default connect(function(store){return store})(Counter)