import React from "react";
import {useFormik} from 'formik'

function checkForm(values){
    // console.log("checkform::",values)
var error={};

if(!values.first){
    error.first="plz enter your name"
}
 if(!values.age){
    error.age="plz enter your name"
 }
 return error
   
}

function Form(){
    var formik=useFormik({
        initialValues:{
            first:'',
            last:'',
            age:''
        },
        onSubmit:(values)=>{console.log(values)},
        validate:checkForm
    })
    return(
        <div>
            <h1>form</h1>
            <form onSubmit={formik.handleSubmit}>

            <label>FIRSTNAME:</label>
            <input type='text' name="first" onChange={formik.handleChange} onBlur={formik.handleBlur} /><br/><br/>
             <div>{formik.touched.first && formik.errors.first}</div>

            <label>LASTNAME:</label>
            <input type='text' name="last" onChange={formik.handleChange}onBlur={formik.handleBlur}/><br/><br/>


            <label>AGE:</label>
            <input type='text' name="age" onChange={formik.handleChange}onBlur={formik.handleBlur}/><br/><br/>
            <div>{formik.touched.age && formik.errors.age}</div>

            <button type='submit'>submit</button>
            </form>
        </div>
    )

}
export  default Form