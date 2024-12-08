import React from "react";
import Toolcards from "./Toolcards";

const Toolsec = () => {
  return (
    <div id="tool-sec">
      <div id="title" className=" flex justify-center p-3  text-[2vw] font-semibold">
        <h1 className="m-4 ">Tool section</h1>
      </div>

      <div className="flex justify-center gap-4">
        <Toolcards />
      </div>
    </div>
  );
};

export default Toolsec;
