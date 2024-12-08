import React from "react";
import Tipcard from "./Tipcard";
import bedimg from "../assets/bedimg.jpeg";
import sunimg from "../assets/sunlightimg.jpg";
import contimg from "../assets/containerimg.jpg";
import compstimg from "../assets/compostimg.jpg";

const Tipsec = () => {
  const cardData = [
    {
      title: "Raised Beds",
      image: bedimg, // Replace with your image
      paragraph: "Consider raised beds for better drainage and soil quality.",
    },
    {
      title: "Sunlight Planning",
      image: sunimg, // Replace with your image
      paragraph: "Plan your garden layout accroding to sunlight availabilty.",
    },
    {
      title: "Container Gardening",
      image: contimg, // Replace with your image
      paragraph: "Use containers to maximize small space gardening.",
    },
    {
      title: "Composting Tips",
      image: compstimg, // Replace with your image
      paragraph: "Composting enriches soil and reduces waste.",
    },
  ];

  return (
    <div id="tip-section">
      <div id="title" className=" flex justify-center p-4 m-4 font-bold text-[2vw]">
        <h1>Garden Planning Tips</h1>
      </div>

      <section className=" flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cardData.map((data, index) => (
            <Tipcard
              key={index}
              title={data.title}
              image={data.image}
              paragraph={data.paragraph}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tipsec;
