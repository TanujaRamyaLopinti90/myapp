import { useFormik } from "formik";
import * as Yup from 'yup'

function Login(){
  let formik=useFormik({
    initialValues:{
      username:'',
      password:''
    },
    validationSchema:Yup.object({
      username:Yup.string().required("please enter your name").min(5,'too short !').max(10,'too long !'),
      password:Yup.string().required("please enter your password").min(5,'too short !').max(10,'too long !')
    }),
    onSubmit:(values)=>{
      console.log(values)
    }
  })
  return(
    <form className="p-5 rounded shadow formMain" onSubmit={formik.handleChange}>
      <h1 className="text-center">Login Form</h1>
      <div className="w-75 m-auto">
        <input type="text" placeholder="username" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control mt-5"/>
        {formik.touched.username && <b>{formik.errors.username}</b>}
        <input type="text" placeholder="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control mt-5"/>
        {formik.touched.password && <b>{formik.errors.password}</b>}
         <button className="btn btn-info form-control mt-4 mb-4">Login</button>
      </div>

    </form>
  )
}
export default Login