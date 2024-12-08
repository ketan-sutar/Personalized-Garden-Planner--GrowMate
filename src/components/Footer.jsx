import React from "react";
import { Typography } from "@material-tailwind/react";
import logo from '../assets/logo.png'


const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <div className="logo flex align-middle">
        <img
          src={logo}
          alt="logo-ct"
          className="w-10"
        />
        <h1 className="text-[2vw] font-bold pt-2" >GrowMate</h1>
        </div>
        
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Tips
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Features
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Tools
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              FAQs
            </Typography>
          </li>

          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-semibold">
        &copy; {currentYear} All Rights Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
