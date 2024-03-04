
import './App.css';
import {useFormik } from 'formik';
 
function App(){
  var userForm=useFormik({

    initialValues:{"fn":"","ln":"","age":""},
        onSubmit:(fv)=>{console.log(fv)}

  })  
  return(                                   
    <div className=''>
      <h1>Welcome to Formik</h1>
          
              <form onSubmit={userForm.handleSubmit}>
                <input type="text" placeholder='Firstname' name='fn' onChange={userForm.handleChange} /><br/>
                <input type="text" placeholder='Lastname' name='ln' onChange={userForm.handleChange} /><br/>
                <input type="text" placeholder='Age' name='age' onChange={userForm.handleChange} /><br/>
                <button type="submit">Save</button>
              </form>
            
          
        
    
    </div>
  )
}

  

export default App;
