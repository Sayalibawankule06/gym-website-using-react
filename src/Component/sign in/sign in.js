
import "./sign in.css";
import React from 'react'


import { useNavigate } from "react-router-dom";
function Sign() {
  const navigate = useNavigate();
    return (
     
       <div class=" container">
        <img src="image/Group 216.png" alt="logo"/>
    <h3>Sign in</h3>
    <form>
        <input type="text" name="Phone/Email" placeholder="Phone/Email"/>
        <input type="text" name="Password" placeholder="Password"/>
        <input type="button" value="Sign in"  onClick={()=>navigate("/up")}/>
        <div class="link"> <a  href="#">Forgot your password</a></div>
        <h5>Sign in with</h5>
        <img src="image/Group.png" alt="logo"/>
        <h5>Didn't have an account ? <a href="sign up.js">Sign Up</a></h5>
        
    </form>
    </div>

    );
  }
  
  export default Sign;
  
