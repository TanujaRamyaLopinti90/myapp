import React from "react";
import {Formik} from 'formik'
import* as Yup from 'yup'


function Formcomp(){
  return(
    <div className="border-2 border-danger p-5 m-2">
        <h1>Registration Form (component)</h1>
        <Formik
        intialValues={{
            first:'',
            last:'',
            age:''
            
        }} 
          validationsSchema={Yup.object({
            first:Yup.string().min(5,'too small').max(10,'too  big').required('enter firstname '),
            age:Yup.string().min(3,'not valid').max(10,'valid').required('enter valid number')

          })}
        onSubmit={(values)=>{console.log('onSubmit',values)}}
        >
            {
                (formik)=>{
                    return(
                        <form onSubmit={formik.handleSubmit}>
                   
                   <h1>Formik component</h1>
            

                        <label>FIRSTNAME:</label>
                        <input type='text' name="first"{...formik.getFieldProps('first')}/><br/><br/>
                         <div>{formik.touched.first && formik.errors.first}</div>
            
                        <label>LASTNAME:</label>
                        <input type='text' name="last"{...formik.getFieldProps('last')}/><br/><br/>
                        <div>{formik.touched.last && formik.errors.last}</div>
            
            
                        <label>AGE:</label>
                        <input type='text' name="age"{...formik.getFieldProps('age')}/><br/><br/>
                        <div>{formik.touched.age && formik.errors.age}</div>
            
                        <button type='submit'>submit</button>
                        </form>
                    )
                }
            }

        </Formik>

    </div>
  )
       
}

export  default Formcomp 