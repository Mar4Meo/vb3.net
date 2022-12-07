import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HashRouter, Routes , Route } from 'react-router-dom'

import U1Dr  from "./pages/Dr/u1Dr";
import AllDr  from "./pages/AllDr/AllDr";
import Dr1  from "./pages/Dr/Unit1/Dr1";
import Dr2 from "./pages/Dr/Unit1/Dr2";
import Dr3 from "./pages/Dr/Unit1/Dr3";
import Dr4 from "./pages/Dr/Unit1/Dr4";
import Dr5 from "./pages/Dr/Unit1/Dr5";
import Dr6 from "./pages/Dr/Unit1/Dr6";
import Dr7 from "./pages/Dr/Unit1/Dr7";
import Dr8 from "./pages/Dr/Unit1/Dr8";
import About from "./pages/About";
import Videos from "./pages/videos/Videos";
import Video1 from "./pages/videos/Video1";
import Video2 from "./pages/videos/Video2";
import Video3 from "./pages/videos/Viedo3";
import Activite1 from "./pages/Activites/Activite1";
import Activite2 from "./pages/Activites/Activite2";
import Activite3 from "./pages/Activites/Activite3";



ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/dr" element={<U1Dr/>}/>
      <Route path="/AllDr" element={<AllDr/>}/>
      <Route path="/Dr1" element={<Dr1/>}/>
      <Route path="/Dr2" element={<Dr2/>}/>
      <Route path="/Dr3" element={<Dr3/>}/>
      <Route path="/Dr4" element={<Dr4/>}/>
      <Route path="/Dr5" element={<Dr5/>}/>
      <Route path="/Dr6" element={<Dr6/>}/>
      <Route path="/Dr7" element={<Dr7/>}/>
      <Route path="/Dr8" element={<Dr8/>}/>
      <Route path="/about" element={<About/>}/>

      {/* Videos */}
      <Route path="/video" element={<Videos/>}/>
      <Route path="/video1" element={<Video1/>}/>
      <Route path="/video2" element={<Video2/>}/>
      <Route path="/video3" element={<Video3/>}/>

      {/* Activites */}

      <Route path="/activite1" element={<Activite1/>}/>
      <Route path="/activite2" element={<Activite2/>}/>
      <Route path="/activite3" element={<Activite3/>}/>

    </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
