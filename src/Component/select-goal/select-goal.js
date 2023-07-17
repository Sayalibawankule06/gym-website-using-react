import "./select-goal.css";
import React from 'react'

import { useNavigate } from "react-router-dom";
 
function Goal() {
  const navigate = useNavigate();
    return (
     
       <>
       <h1>Gym Point</h1>
    <h3>Choose your
        GOAL</h3>
        <img src="image/Rectangle 307.png"/>
        <img src="image/Rectangle 308.png"/>
        <img src=" image/Group 218.png"/>

        <img src="image/Rectangle 309.png"/>
        <img src="image/Rectangle 312.png"/>
        <img src="image/Rectangle 310.png"/>
       <img src=" image/Group 219.png"/>
       <div div class="container">
        <form class="" action="scedule.html" >
            <input id="sub" type="submit" name="" value="Continue"onClick={()=>navigate("/schedule")}/> 
         </form>
    </div></>

    );
  }
  
  export default Goal;
  