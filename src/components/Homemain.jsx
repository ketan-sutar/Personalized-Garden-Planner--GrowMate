import React from "react";
import "./page1.css";
import Navbar from "./Navbar";

const Homemain = () => {
  return (
    <>
      <section id="home">
        <Navbar />
        <div id="title-sec">
          <div id="top" className="text-white ">
          <h1 className="text-[3vw]">Create Your Garden Retreat </h1>
          <h1 className="text-[3vw]">Personalized Plant Suggestions </h1>

          </div>
          <div id="btn-sec" >
            <button className="bg-white p-2 rounded-md">Get Started</button>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Homemain;
