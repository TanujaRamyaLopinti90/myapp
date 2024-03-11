import React from "react";
import { connect } from "react-redux";
import { getcountries } from "../store/action";

function Countries(props){
    console.log('props in countries::',props)
    React.useEffect(()=>{
        props.dispatch(getcountries());
       },[]) 

    return(
        <div className="betterview">
            <h1>Countries</h1>
            <ol>
                 {
                    props.countries.countries.map((country)=>{
                         return(<li>{country.name}</li>)

                    })
                 }
            </ol>
        </div>
    )
}
export default connect(store=>store)(Countries)