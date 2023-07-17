import "./plan.css";
import React from 'react'

import { useNavigate } from "react-router-dom";
 
function Plan() {
  const navigate = useNavigate();
    return (
     
       <>
         <h1>Gym Point</h1>
    <h3>Select your subscription</h3>
    <div class="container">
        <img src="image/Frame 1.png"/>
        <form class="" action="final.html" >
            <input id="sub" type="submit" name="" value="Continue"onClick={()=>navigate("/final")}/> 
         </form>
    </div></>

    );
  }
  
  export default Plan;
  