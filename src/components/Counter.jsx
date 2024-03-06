import { connect } from "react-redux";
import React from "react";

function Counter(props){
    console.log(props)
    return(
        <div className="betterview">Counter</div>
    )
}
export default connect(function(store){return store}) (Counter)