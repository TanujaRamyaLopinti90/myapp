import { Link } from "react-router-dom"

    function Nav(){
        return(
            <div className="d-flex jusstify-content-between align-items-center bg-warning text-light p-3">
        <div className="w-75">
              <b>House Services</b>
        </div>
            <div className="d-flex justify-content-evenly w-25 btags">
            <Link to='/login'><b>Login</b></Link>
            <Link to='/register'><b>Register</b></Link>
        </div>
        </div>
        )
    }
    export default Nav