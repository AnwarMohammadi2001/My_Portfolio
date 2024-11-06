import React, { useState, useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import { MdMenu, MdLightMode, MdDarkMode } from "react-icons/md";
import ResponsiveNavbar from "./ResponsiveNavbar";

const navItems = [
  { id: 1, title: "Home", path: "#home" },
  { id: 2, title: "About me", path: "#aboutme" },
  { id: 3, title: "Projects", path: "#projects" },
  { id: 4, title: "Skills", path: "#skills" },
  { id: 5, title: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);
  const [darkmode, setDarkmode] = useState(() => {
    const mode = localStorage.getItem("darkmode");
    return mode === "true";
  });

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkmode", String(darkmode));
  }, [darkmode]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-200 dark:bg-[#1E293B]">
      <nav className="container mx-auto flex h-[70px] items-center justify-between">
        <div>
          {/* Logo and Name */}
          <h1 className="text-3xl font-bold text-[#F0F0F0]">
            <a href="home" className="uppercase flex items-center space-x-2">
              <span className="flex justify-center items-center w-12 h-12 text-white rounded-full bg-[#ff014f] font-bold text-3xl">
                M
              </span>
              <span
                className={`${darkmode ? "text-gray-100" : "text-slate-900"}`}
              >
                ANWAR
              </span>
            </a>
          </h1>
        </div>
        <div className="hidden lg:flex space-x-8 items-center">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="uppercase inline-block cursor-pointer hover:text-[#ff014f] text-slate-950 dark:text-gray-100 dark:hover:text-[#ff014f] text-md hover:shadow-[0_3px_0_-1px_#ff014f] duration-300 font-semibold"
              >
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button
              className={`bg-[#ff014f] font-bold text-lg px-5 hover:bg-[#930d35] py-1.5 rounded-md ${
                darkmode ? "text-gray-100" : "text-slate-900"
              }`}
            >
              Hire Me
            </button>
            <div className="hidden md:flex w-[100px] items-center justify-end">
              <div
                className="flex items-center cursor-pointer transition-all gap-2 duration-300"
                onClick={() => setDarkmode(!darkmode)}
              >
                <span
                  className={`text-lg font-bold mr-2 ${
                    darkmode ? "text-gray-100" : "text-slate-900"
                  }`}
                >
                  {darkmode ? "Dark" : "Light"}
                </span>
                {darkmode ? (
                  <MdDarkMode className="text-blue-500 text-3xl" />
                ) : (
                  <MdLightMode className="text-yellow-400 text-3xl" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => setIsOpen(!isopen)} className="block lg:hidden">
          {!isopen ? (
            <MdMenu className="size-9 text-gray-100" />
          ) : (
            <FaXmark className="size-9 text-gray-100" />
          )}
        </div>
      </nav>
      <div className="block lg:hidden">
        <ResponsiveNavbar
          isopen={isopen}
          setIsOpen={setIsOpen}
          navItems={navItems}
        />
      </div>
    </div>
  );
};
