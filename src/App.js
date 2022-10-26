import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Sports from "./Sports";
import Errorpage from "./Errorpage";
import India from './India';
import Technology from "./Technology";
import Entertainment from './Entertainment';
import Business from "./Business";
import Health from "./Health";
import FrontPage from './FrontPage'

 
const App = () => {
  return (
  
      <Routes>
      
          <Route path="/" element={<FrontPage />} />
          <Route path="/worldwide" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/india" element={<India />}/>
          <Route path="/entertainment" element={<Entertainment />}/>
          <Route path="/technology" element={<Technology />}/>
          <Route path="/business" element={<Business />}/>
          <Route path="/health" element={<Health />}/>
          <Route path="*" element={<Errorpage />}/>
      </Routes>
   
  );
};

export default App;
