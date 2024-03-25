import { useFormik } from "formik";
import * as Yup from 'yup'

function Register(){
    let formik=useFormik({
        initialValues:{
            Name:'',
            Email:'',
            password:'',
            phno:''
        },
        validationSchema:Yup.object({
        name:Yup.string().required("please enter your name").min(5,'too short !').max(10,'too long !'),
        email:Yup.string().required("please enter your email").min(5,'too short !').max(10,'too long !'),
        password:Yup.string().required("please enter your password").min(5,'too short !').max(10,'too long !'),
        phno:Yup.string().required("please enter your phno").min(5,'too short !').max(10,'too long !')
          }),
        onSubmit:(values)=>{
            console.log(values)
          }
    })
    
    
    return(
        <form className="p-5 rounded shadow formMainreg" onSubmit={formik.handleChange}>
        <h1 className="text-center">Register Form</h1>
        <div className="w-75 m-auto">
          <input type="text" placeholder="Enter your name"     name="name"     onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control mt-5"/>
        
          <input type="text" placeholder="Enter your Email"    name="Email"    onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control mt-5"/>
          <input type="text" placeholder="Enter your password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control mt-5"/>
          <input type="text" placeholder="Enter your ph no"    name="ph no"    onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control mt-5"/>
           <button className="btn btn-info form-control mt-4 mb-4">Login</button>
        </div>
  
      </form>
    )
}

export default Register