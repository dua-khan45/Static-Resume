"use client";
//for animate on scroll libray
import { useEffect } from "react";
import AOS from "aos"
import"aos/dist/aos.css";
// my components
import {Detail} from "./detail";
import Sidebar from "./sidebar";
const MainPage = () => {
    //useEffect for AOS animate
  useEffect(()=> {
    AOS.init({
      once: false,
    });
  }, []); 
    return (
    <div className="flex overflow-hidden h-screen">
      {/* side barr */}
<div className="w-1/5"> 
  <Sidebar/>
</div>
      {/* main */}
      <div className="w-full">
        <Detail/>
      </div>

        {/* <h1 data-aos="flip-left"className="text-5xl text-blue-800">Dua khan</h1> */}
        {/* <h1 data-aos="flip-up"className="text-5xl text-blue-800">Arsalan Ahmad</h1> */}
        
    </div>   
    )
}
export default MainPage