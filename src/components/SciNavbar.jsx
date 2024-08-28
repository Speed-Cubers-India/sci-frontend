import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from '../assets/SCI-Logo-only.png'
import logo2 from '../assets/SCI-Logo.png'
import { Link, useLocation } from "react-router-dom";

function NavList({ handleNavClose }) {
  const [selectedLink, setSelectedLink] = useState(useLocation().pathname)

  return (
    <List className="lg:flex-row items-end space-y-2 lg:space-y-0 my-2 md:my-4">
      <Link onClick={() => setSelectedLink("/")} to={"/"}>
        <Typography onClick={() => handleNavClose()}
          variant="small"
          color="blue-gray"
          className="font-medium"

        >
          <span className={selectedLink === "/" ? "md:mx-4 font-semibold border-b-2 border-b-gray-800" : "hover:underline hover:underline-offset-4 md:mx-4 font-medium"}>Home</span>
        </Typography>
      </Link>
      <Link onClick={() => setSelectedLink("/about")} to={"/about"}>
        <Typography onClick={() => handleNavClose()}
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <span className={selectedLink === "/about" ? "md:mx-4 font-semibold border-b-2 border-b-gray-800" : "hover:underline hover:underline-offset-4 md:mx-4 font-medium"}>About</span>
        </Typography>
      </Link>
      <Link onClick={() => setSelectedLink("/ranking")} to={"/ranking"}>
        <Typography onClick={() => handleNavClose()}
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <span className={selectedLink === "/ranking" ? "md:mx-4 font-semibold border-b-2 border-b-gray-800" : "hover:underline hover:underline-offset-4 md:mx-4 font-medium"}>Ranking</span>
        </Typography>
      </Link>
      <Link onClick={() => setSelectedLink("/login")} to={"/login"}>
        <Typography onClick={() => handleNavClose()}
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <span className={selectedLink === "/login" ? "md:mx-4 font-semibold border-b-2 border-b-gray-800" : "hover:underline hover:underline-offset-4 md:mx-4 font-medium"}>Login</span>
        </Typography>
      </Link>
    </List>
  );
}

export function SciNavbar() {
  const [openNav, setOpenNav] = useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <div className="flex relative items-center justify-center shadow-sm">
      <Navbar className="rounded-none max-w-screen-lg shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a href={"/"}>
            <div className="flex absolute top-2 md:top-4 left-4 md:left-2 items-center h-10 my-2">
              {/* for larger screens */}
              <img className="w-[80px] hidden md:block" src={logo} alt="SCI-Logo" />
              {/* for smaller screens */}
              <img onClick={() => openNav && setOpenNav(!openNav)} className="w-[80px] block md:hidden" src={logo2} alt="SCI-Logo" />
              <Typography
                variant="h4"
                className="cursor-pointer text-sm md:text-lg hidden md:block"
              >
                <span className="text-red-900">S</span>peed<span className="text-red-900">C</span>ubers <span className="text-red-900">I</span>ndia
              </Typography>
            </div>
          </a>
          <div className="flex items-center justify-center">
            <div className="hidden lg:block">
              <NavList />
            </div>
          </div>
          <IconButton
            variant="text"
            color="black"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList handleNavClose={() => setOpenNav(!openNav)} />
        </Collapse>
      </Navbar>
    </div>
  );
}