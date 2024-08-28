import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import logo from '../assets/SCI-Logo-only.png'
import logo2 from '../assets/SCI-Logo.png'
import { Link, useLocation } from "react-router-dom";


// //DropdownMenu
// function NavListMenu({ title, list }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const renderItems = list.map(
//     ({ icon, title, description, href }, key) => (
//       <Link to={href} key={key}>
//         <MenuItem className="flex items-center gap-3 rounded-lg">
//           {/* <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
//             {" "}
//             {React.createElement(icon, {
//               strokeWidth: 2,
//               className: "h-6 text-gray-900 w-6",
//             })}
//           </div> */}
//           <div>
//             <Typography
//               variant="h6"
//               color="blue-gray"
//               className="flex items-center text-sm font-bold"
//             >
//               {title}
//             </Typography>
//             <Typography
//               variant="paragraph"
//               className="text-xs !font-medium text-blue-gray-500"
//             >
//               {description}
//             </Typography>
//           </div>
//         </MenuItem>
//       </Link>
//     ),
//   );

//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography as="div" variant="small" className="font-medium">
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               {title}
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
//                   }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
//                   }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//           <ul className="outline-none outline-0">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//     </React.Fragment>
//   );
// }


// //for the competitions dropdown (should replace this with the upcoming competitions)
// const CompetitionsMenuListItems = [
//   {
//     title: "Competition 1",
//     description: "Experience the thrill of competitive cubing!",
//     href: "/competition1"
//     // icon: SquaresPlusIcon,
//   },
//   {
//     title: "Competition 2",
//     description: "Experience the thrill of competitive cubing!",
//     href: "/competition2"
//     // icon: UserGroupIcon,
//   },
//   {
//     title: "Competition 3",
//     description: "Experience the thrill of competitive cubing!",
//     href: "/competition3"
//     // icon: Bars4Icon,
//   },
//   {
//     title: "Competition 4",
//     description: "Experience the thrill of competitive cubing!.",
//     href: "/competition4"
//     // icon: SunIcon,
//   },
//   {
//     title: "Competition 5",
//     description: "Experience the thrill of competitive cubing!",
//     href: "/competition5"
//     // icon: GlobeAmericasIcon,
//   }
// ];

// //for the competitors dropdown
// const CompetitorMenuListItems = [
//   {
//     title: "State Ranking",
//     description: "See where you rank in your state",
//     // icon: SquaresPlusIcon,
//   },
//   {
//     title: "State Records",
//     description: "Check out the state cubing records",
//     // icon: UserGroupIcon,
//   }
// ];

// //for the organizer dropdown
// const OrganizerMenuListItems = [
//   {
//     title: "SCI Supported Competitions",
//     description: "Find the SCI competitions",
//     // icon: SquaresPlusIcon,
//   },
//   {
//     title: "WCA Organizer Guidelines",
//     description: "Learn about WCA organizer guidelines",
//     // icon: UserGroupIcon,
//   }
// ];

// //for the organizer dropdown
// const AboutMenuListItems = [
//   {
//     title: "About Speed Cubing India",
//     description: "Know more about SCI",
//     // icon: SquaresPlusIcon,
//   },
//   {
//     title: "Who we are",
//     description: "Meet our members",
//     // icon: UserGroupIcon,
//   },
//   {
//     title: "Contact us",
//     description: "Feel free to contact us",
//     // icon: UserGroupIcon,
//   },
//   {
//     title: "Donations",
//     description: "Help us improve our organisation",
//     // icon: UserGroupIcon,
//   },
//   {
//     title: "Logo",
//     description: "Official SCI logo",
//     // icon: UserGroupIcon,
//   }
// ];

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
      {/* <NavListMenu title={"Competitions"} list={CompetitionsMenuListItems} />
      <NavListMenu title={"Competitors"} list={CompetitorMenuListItems} />
      <NavListMenu title={"Organizers"} list={OrganizerMenuListItems} />
      <NavListMenu title={"About"} list={AboutMenuListItems} /> */}
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
            {/* <a href={"/login"}>
              <div className="hidden gap-2 lg:flex">
                <Button className="rounded-sm" variant="gradient" size="sm">
                  Login
                </Button>
              </div>
            </a> */}
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
          {/* <a href={"/login"}>
            <div onClick={() => setOpenNav(!openNav)} className="flex w-1/3 lg:hidden">
              <Button className="rounded-sm" variant="gradient" size="sm" fullWidth>
                Login
              </Button>
            </div>
          </a> */}
        </Collapse>
      </Navbar>
    </div>
  );
}