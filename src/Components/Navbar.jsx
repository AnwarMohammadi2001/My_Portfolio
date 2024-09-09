import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About me",
    path: "/aboutme",
  },
  {
    id: 3,
    title: "Projects",
    path: "/",
  },
  {
    id: 4,
    title: "Skills",
    path: "/",
  },
  {
    id: 5,
    title: "Contact",
    path: "/",
  },
];
export const Navbar = () => {
  return (
    <div>
      <nav className="container flex h-[80px] items-center  justify-between  bg-[#1E293B] ">
        <div>
          {/* Logo and Name */}
          <h1 className="text-3xl font-bold text-[#F0F0F0]">
            <Link to="/" className="uppercase flex items-center space-x-2">
              <span className="flex justify-center items-center w-12 h-12 text-white rounded-full bg-[#ff014f] font-bold text-3xl">
                M
              </span>
              <span
                className="text-white
              "
              >
                ANWAR
              </span>
            </Link>{" "}
            {/* Link to Homepage */}
          </h1>
        </div>
        <div className="flex space-x-8 items-center">
          <ul className="flex items-center   space-x-8">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="uppercase inline-block hover:text-[#ff014f] text-white text-lg hover:shadow-[0_3px_0_-1px_#ff014f] duration-300 font-semibold"
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <button className="bg-[#ff014f] text-white font-bold text-lg px-5 hover:bg-[#930d35] py-1.5 rounded-md">
            Hire Me
          </button>
        </div>
      </nav>
    </div>
  );
};
