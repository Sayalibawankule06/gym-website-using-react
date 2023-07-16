import "./intro2.css";
import React from 'react'


 import intro2 from "../../assets/image/intro2.png"
import { useNavigate } from "react-router-dom";
function Intro2() {
  const navigate = useNavigate();
    return (
      <div className="Start"  style={{backgroundImage: `url(${intro2})`
     }}>
        <form class="" action="intro.html">
    <input id="sub" type="submit" name="" value="Get Started " onClick={()=>navigate("/intro3")}/> 
 </form>
</div>
      
    
    );
  }
  
  export default Intro2;
  