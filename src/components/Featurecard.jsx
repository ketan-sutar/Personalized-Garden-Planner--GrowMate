import React from "react";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

const Featurecard = ({ title, image, paragraph }) => {
  return (
    <>
      <Card
        shadow={false}
        className="relative grid h-[30vw] sm:h-[25vw] w-full max-w-[18vw] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover', // Ensures the image covers the entire container
            backgroundPosition: 'center', // Keeps the image centered
          }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-6 px-4 sm:px-8">
          <Typography
            variant="h2"
            color="white"
            className="mb-4 text-[2.5vw] sm:text-[2rem] font-medium leading-[1.5]"
          >
            {title}
          </Typography>
          <Typography variant="h6" className="mb-4 text-[1vw] text-gray-400">
            {paragraph}
          </Typography>
          <button className="px-4 py-2 border border-white text-white rounded-md">Read More</button>
        </CardBody>
      </Card>
    </>
  );
};

export default Featurecard;
