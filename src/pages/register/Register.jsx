import { Link, NavLink } from "react-router-dom";
import "./register.scss";

const Register = () => {
    return (
      <div className="register">
        <div className="card">
          <div className="left">
            
           <h1>Blink</h1>
    
    </div>
    <div className="right">
      <h1>Register</h1>
           <form>
       <input type="text" placeholder="Username"/>
       <input type="email" placeholder="Email"/>   
       <input type="Password" placeholder="password"/>   
       <input type="text" placeholder="Name"/>   
          <button> Register</button>  
          </form>
      </div>
      </div>
  </div>
    );
  };
  export default Register;
