import React from "react";
import { useFormik } from 'formik'

function Login(){ 
    const formik= useFormik({
        initialValues:{
         name:'',
         email:'',
         password:''
        },
        onSubmit:(Values)=>{
            console.log('from submit',Values)
        },
        validation:(Values)=>{
            let errors={};

          if(!Values.name){
            errors.name='name must required'
          }
          if(!Values.email){
            errors.email='email must required'
          }
          if(!Values.password){
            errors.password='password must required'
          }
          if(!Values.confirmpassword){
            errors.confirmpassword='confirmpassword must required'
          }
        }

    })
    return( 
        <div className="mybox" >
             <h1>Login</h1> 

        <form onSubmit={formik.handleSubmit}>    
            <label>Name:</label>
            <input type="text" name="name" placeholder=" Please Enter your name" value={formik.Values.name} onChange={formik.handleChange}  />

            <label>Email:</label>
            <input type="text" name="email" placeholder=" Please Enter your email" value={formik.Values.email} onChange={formik.handleChange}  />

            <label>Password:</label>
            <input type="text" name="password" placeholder=" Please Enter your password" value={formik.Values.password} onChange={formik.handleChange}  />

            <label>confirmpassword:</label>
            <input type="text" name="confirmpassword" placeholder=" Please Enter your confirmpassword" value={formik.Values.confirmpassword} onChange={formik.handleChange}  />

    </form> 
    </div> 
    )
}
export default Login