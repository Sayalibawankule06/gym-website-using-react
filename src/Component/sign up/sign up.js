import "./sign up .css";
import React from 'react'

import { useNavigate } from "react-router-dom";

 
function Up() {
  const navigate = useNavigate();
    return (
     
        <div class="container">
            
        <h1>Gym Point</h1>
        <h4>Sign Up</h4>
       <form >
        <input type ="text" name="fname" id="name" placeholder="full name"/>
        <input type1 ="text" name="email" id="name" placeholder="Email"/>
        <input type2 ="text" name="pass" id="name" placeholder="Phone"/>
        <input type3 ="text" name="confirm pass" id="name" placeholder="Password"/>
        <input type="button" onClick="location.href='gender.html'"value='Sign in'/>
        <label class="container">
            <input type="checkbox" checked="checked"/>
            <span class="checkmark">By continuing you accept our Privacy Policy</span>
          </label>
          
       
        
        <h5>Sign in with</h5>
        <img src="image/Group.png"/>
    </form>
    
</div>

    );
  }
  
  export default Up;
  
