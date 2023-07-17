import "./gender.css";
import React from 'react'

import { useNavigate } from "react-router-dom";
 
function Gender() {
  const navigate = useNavigate();
    return (
     
       <>
         <h1>Gym Point</h1>
    <h3>Choose gender</h3>
    <div div class="container">
        <form class="" action="" >
            <input id="sub" type="submit" name="" value="Continue" onClick={()=>navigate("/goal")}/> 
         </form>
    </div>
       </>

    );
  }
  
  export default Gender;
  