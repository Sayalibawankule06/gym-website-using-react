import "./sign in.css";
import React from 'react'

 
function Sign() {
    return (
     
       <div class=" container">
        <img src="image/Group 216.png"/>
    <h3>Sign in</h3>
    <form>
        <input type="text" name="Phone/Email" placeholder="Phone/Email"/>
        <input type="text" name="Password" placeholder="Password"/>
        <input type="button" value="Sign in"/>
        <div class="link"> <a  href="#">Forgot your password</a></div>
        <h5>Sign in with</h5>
        <img src="image/Group.png"/>
        <h5>Didn't have an account ? <a href="sign up.html">Sign Up</a></h5>
        
    </form>
    </div>

    );
  }
  
  export default Sign;
  
