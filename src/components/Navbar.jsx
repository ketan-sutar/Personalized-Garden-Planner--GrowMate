import React, { useState, useEffect } from "react";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    // Close the mobile navigation menu if the screen is resized above 960px
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    // This is the navigation list, it contains links for the navbar
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 justify-center">
      <Typography
        as="li"
        variant="small"
        color="white" // Change text color to white
        className="p-1 font-bold" // Make text bold
      >
        <a href="#" className="flex items-center">
          Tips
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white" // Change text color to white
        className="p-1 font-bold" // Make text bold
      >
        <a href="#" className="flex items-center">
          Features
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white" // Change text color to white
        className="p-1 font-bold" // Make text bold
      >
        <a href="#" className="flex items-center">
          Tools
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white" // Change text color to white
        className="p-1 font-bold" // Make text bold
      >
        <a href="#" className="flex items-center">
          Contact Us
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="w-full h-auto">
      {/* Material Tailwind Navbar component */}
      <MTNavbar className="sticky top-0 z-10 h-max max-w-full px-4 py-2 lg:px-8 lg:py-4 bg-transparent border-none">
        <div className="flex items-center justify-between text-white">
          {/* Change text color to white */}
          {/* Navbar Logo */}
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold" // Make text bold
          >
            GrowMate
          </Typography>
          <div className="flex items-center gap-4">
            {/* Desktop Navigation Links */}
            <div className="mr-4 hidden lg:block flex-1 justify-center">
              {navList}
            </div>
            <div className="flex items-center gap-x-1">
              {/* Log In Button */}
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log in</span>
              </Button>
            </div>
            {/* Mobile Menu Icon */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {/* Toggle between hamburger and close icon */}
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            {/* Sign in Button in Mobile Menu */}
            <Button fullWidth variant="gradient" size="sm">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </MTNavbar>
    </div>
  );
};

export default Navbar;
