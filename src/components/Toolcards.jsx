import React from "react";
import orgimg from '../assets/organizeimg.jpg'
import toolimg from '../assets/toolimg.jpg'
import lastimg from '../assets/lastimg.jpg'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const Toolcards = () => {
  return (
    <>
      <Card className="w-full max-w-[30vw] h-[16vw] flex-row shadow-none">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-lg"
        >
          <img
            src={toolimg}
            alt="card-image"
            className="h-full w-full object-contain"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Tool Features
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Discover the essentail tools and features of the Personal Garden
            Planner to make your gardening experience seamless.
          </Typography>
          <a href="#" className="inline-block">
            <Button
              variant="text"
              className="flex items-center gap-2 border border-blue-700"
            >
              Read More
            </Button>
          </a>
        </CardBody>
      </Card>

      <Card className="w-full max-w-[30vw] h-[16vw] flex-row shadow-none">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-lg"
        >
          <img
            src={orgimg}
            alt="card-image"
            className="h-full w-full object-contain"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Organize & Track
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Learn how the Garden Planner helps you stay organized and track
            every planting with complete ease.
          </Typography>
          <a href="#" className="inline-block">
            <Button
              variant="text"
              className="flex items-center gap-2 border border-blue-700"
            >
              Read More
            </Button>
          </a>
        </CardBody>
      </Card>

      <Card className="w-full max-w-[30vw] h-[16vw] flex-row shadow-none">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-lg"
        >
          <img
            src={lastimg}
            alt="card-image"
            className="h-full w-full object-contain"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Gardening Tips
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Explore the latest gardening tips and trends to keep your garden
            thriving all year round.
          </Typography>
          <a href="#" className="inline-block">
            <Button
              variant="text"
              className="flex items-center gap-2 border border-blue-700"
            >
              Read More
            </Button>
          </a>
        </CardBody>
      </Card>
    </>
  );
};

export default Toolcards;
