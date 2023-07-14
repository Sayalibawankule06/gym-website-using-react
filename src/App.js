
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from './Component/start/start';
import Intro1 from './Component/intro1/intro1';
import Intro2 from './Component/intro2/intro2'
import Intro3 from './Component/intro3/intro3'
function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Start/>}/>
    <Route path="intro1" element={<Intro1 />} />
    <Route path="intro2" element={<Intro2/>} />
  
    <Route path="intro3" element={<Intro3/>} />
    
  
  
  
    

  </Routes>
  
  </BrowserRouter>
  );
}

export default App;
