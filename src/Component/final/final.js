import "./final.css";
import React from 'react'

import { useNavigate } from "react-router-dom";
 
function Final() {
  const navigate = useNavigate();
    return (
     
       <>
        <div div class="container"></div>
<h1>Gym Point</h1>
<h3>Wohoo!!!
    Payment successful.</h3>
    <p><pre>GymPoint will call you regarding your starting date & timing.
        It is requsted to strictly follow our trainers routine & reach on time.
        For any queries feel free to contact our Customer care.</pre></p>
        <p><pre>Customer care : 1500 7373 4666 
            (8.00AM-10.00PM)</pre></p>
            
                <form class="" action="index.html" >
                    <input id="sub" type="submit" name="" value="Logout"onClick={()=>navigate("/")}/> 
                 </form>
            
       </>

    );
  }
  
  export default Final;
  