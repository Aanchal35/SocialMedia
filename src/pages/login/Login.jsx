
import { Link } from "react-router-dom";

import "./login.scss";

const Login = () => {

    return (
      
      <div className="Login">
        <div className="card">
          <div className="left">
             <h1>Blink</h1>
    <p>Even a falling star still shines</p>
      <span>Don't you have an account?</span>
      
      <Link to="/register">
      <button>Register</button>
      </Link>
      </div>
      <div className="right">
      <h1>Login</h1>
           <form>
       <input type="text" placeholder="Username"/>
       <input type="Password" placeholder="password"/>   
          <button > Login</button>  
          </form>
      </div>
      </div>
  </div>
    );
  };
  export default Login;
