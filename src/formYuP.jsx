import React from "react";
import {useFormik} from 'formik'
import* as Yup from 'yup'


function Formyup(){
    var formik=useFormik({
        initialValues:{
            first:'',
            last:'',
            age:''
        },
        onSubmit:(values)=>{console.log(values)},
        validationSchema:Yup.object({
            first:Yup.string().min(5,'too small').max(10,'too  big').required('enter firstname '),
            age:Yup.string().min(3,'not valid').max(10,'valid').required('enter valid number')
         })

    })
    console.log(formik.touched)
    return(
        <div>
            <h1>form-Yup</h1>
            <form onSubmit={formik.handleSubmit}>
             
            

            <label>FIRSTNAME:</label>
            <input type='text' name="first" onChange={formik.handleChange}  /><br/><br/>
             <div>{formik.touched.first && formik.errors.first}</div>

            <label>LASTNAME:</label>
            <input type='text' name="last" onChange={formik.handleChange}/><br/><br/>


            <label>AGE:</label>
            <input type='text' name="age" onChange={formik.handleChange}onBlur={formik.handleBlur}/><br/><br/>
            <div>{formik.touched.age && formik.errors.age}</div>

            <button type='submit'>submit</button>
            </form>
        </div>
    )

}
export  default Formyup