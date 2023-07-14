 import "./start.css";


 import start1 from "../../assets/image/start.png"
import React from "react";
import { useNavigate } from "react-router-dom";
function Start() {
  const navigate = useNavigate();
    return (
      <div className="Start"  style={{backgroundImage: `url(${start1})`
     }}>
        <form class="" action="intro1.js" >
    <input id="sub" type="submit" name="" value="Get Started " onClick={()=>navigate("/intro1")}/> 
 </form>
</div>
      
    
    );
  }
  
  export default Start;
  