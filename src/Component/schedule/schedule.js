import "./schedule.css";
import React from 'react'

import { useNavigate } from "react-router-dom";
 
function Schedule() {
  const navigate = useNavigate();
    return (
     <>
      <h1>Gym Point</h1>
    <h3>We create your training schedule</h3>
    <p>We create a workout according to demographic profile, activity level and interest</p>
    <div div class="container">
        <form class="" action="plan.html" >
            <input id="sub" type="submit" name="" value="Start Training"onClick={()=>navigate("/plan")}/> 
         </form>
         
    </div>
    </>
    );
  }
  
  export default Schedule;
  