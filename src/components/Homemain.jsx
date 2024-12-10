import React from "react";
import "./page1.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";






const Homemain = () => {

  const navigate=useNavigate();
  

  return (
    <>
      <section id="home">
        <Navbar />
        <div id="title-sec">
          <div id="top" className="text-white flex flex-col pt-[10vw] sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[20vh] pl-[5vw] leading-tight ">
          <h1 className="text-[5.5vw]">Create Your Garden <span id="fspan"> Retreat </span> </h1>
          <h1 className="text-[5.5vw]"> <span id="fspan">Personalized</span> Plant Suggestions </h1>

          </div>
          <div id="btn-sec" className="pl-[5.5vw] pt-5" >
            <button onClick={()=> navigate('/Login') }   className="bg-green-600 text-white px-4 py-2 text-[1.2vw] rounded-lg">Get Started</button>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Homemain;
