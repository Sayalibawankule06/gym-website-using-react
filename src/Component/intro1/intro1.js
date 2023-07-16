import "./intro1.css";
import React from 'react'

 import intro1 from "../../assets/image/intro1.png"
import { useNavigate } from "react-router-dom";
function Intro1() {
  const navigate = useNavigate();
    return (
      <div className="Start"    style={{backgroundImage: `url(${intro1})`
    }}>

        <form class="" action="intro2.js" >
    <input id="sub" type="submit" name="" value="Get Started "onClick={()=>navigate("/intro2")}/> 
 </form>
</div>
      
    
    );
  }
  
  export default Intro1;
  