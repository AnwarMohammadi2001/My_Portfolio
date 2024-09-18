import React from "react";

const navItems = [
  {
    id: 1,
    title: "Home",
    path: "#home",
  },
  {
    id: 2,
    title: "About me",
    path: "#aboutme",
  },
  {
    id: 3,
    title: "Projects",
    path: "#projects",
  },
  {
    id: 4,
    title: "Skills",
    path: "#skills",
  },
  {
    id: 5,
    title: "Contact",
    path: "#contact",
  },
];
export const Navbar = () => {
  return (
    <div>
      <nav className="container flex h-[80px] items-center  justify-between  bg-[#1E293B] ">
        <div>
          {/* Logo and Name */}
          <h1 className="text-3xl font-bold text-[#F0F0F0]">
            <a href="home" className="uppercase flex items-center space-x-2">
              <span className="flex justify-center items-center w-12 h-12 text-white rounded-full bg-[#ff014f] font-bold text-3xl">
                M
              </span>
              <span
                className="text-white
              "
              >
                ANWAR
              </span>
            </a>{" "}
            {/* Link to Homepage */}
          </h1>
        </div>
        <div className="flex space-x-8 items-center">
          <ul className="flex items-center   space-x-8">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="uppercase inline-block cursor-pointer hover:text-[#ff014f] text-white text-lg hover:shadow-[0_3px_0_-1px_#ff014f] duration-300 font-semibold"
              >
                <a href={item.path}>{item.title}</a>
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
