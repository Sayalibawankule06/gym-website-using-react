
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from './Component/start/start';
import Intro1 from './Component/intro1/intro1';
import Intro2 from './Component/intro2/intro2';
import Intro3 from './Component/intro3/intro3';
import Sign from './Component/sign in/sign in';
import Up from './Component/sign up/sign up';

import Gender from './Component/gender/gender';
import Goal from './Component/select-goal/select-goal';
import Schedule from './Component/schedule/schedule';
import Plan from './Component/plan/plan';
import Final from './Component/final/final';
function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Start/>}/>
    <Route path="/intro1" element={<Intro1 />} />
    <Route path="/intro2" element={<Intro2/>} />
    <Route path="/intro3" element={<Intro3/>} />
    <Route path="/sign" element={<Sign/>} />
    <Route path="/up" element={<Up/>} />
    <Route path="/gender" element={<Gender/>} />
    <Route path="/final" element={<Final/>} />
    <Route path="/plan" element={<Plan/>} />


    <Route path="goal" element={<Goal/>} />
    <Route path="schedule" element={<Schedule/>} />
</Routes>
  
  </BrowserRouter>
  
  );
}

export default App;
