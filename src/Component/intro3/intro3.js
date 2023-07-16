import "./intro3.css";
import React from 'react'

 import intro3 from "../../assets/image/intro3.png";
import { useNavigate } from "react-router-dom";
function Intro3() {
  const navigate = useNavigate();
    return (
      
      <div className="Start"  style={{backgroundImage: `url(${intro3})`
     }}>
        <form class="" action="" >
    <input id="sub" type="submit" name="" value="Get Started " onClick={()=>navigate("/sign")}/> 
 </form>
</div>
      
    
    );
  }
  
  export default Intro3;
  