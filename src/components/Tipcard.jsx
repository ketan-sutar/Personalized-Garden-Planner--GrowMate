import React from "react";
import bedimg from "../assets/bedimg.jpeg";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const Tipcard = ({title,image,paragraph}) => {
  return (
    <>
      <Card className="w-full max-w-[38vw] flex-row-reverse h-[17vw]">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-l-none" // Change to rounded-l-none
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-center"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            {paragraph}
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Read More
            </Button>
          </a>
        </CardBody>
      </Card>
    </>
  );
};

export default Tipcard;
