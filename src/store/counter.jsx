import React from "react";
import {connect} from 'react-redux'

function Counter(props){
    console.log(props)
    return(
        <div>
            <h1>Counter:{props.counter.count}</h1>
            <button onClick={()=>{props.dispatch({type:'INCREMENT'})}}>INC</button>
            <button onClick={()=>{props.dispatch({type:'DECREMENT'})}}>DEC</button>
        </div>
    )
}
export default connect((store)=>{
    return store
})(Counter)