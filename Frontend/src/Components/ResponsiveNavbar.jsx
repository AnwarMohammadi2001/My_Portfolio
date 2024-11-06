import { div } from "framer-motion/client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const ResponsiveNavbar = ({ isopen, navItems, setIsOpen }) => {
  const [closeNav, setCloseNav] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {isopen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full h-fit z-20 "
        >
          <div className="text-xl texgt-white py-10 m-5 rounded-xl bg-primaryxl font-semibold uppercase bg-slate-800 border border-white">
            <div className="flex justify-evenly items-center pb-5">
              <button className="bg-[#ff014f] text-white font-bold text-lg px-5 hover:bg-[#930d35] py-1.5 rounded-md">
                Hire Me
              </button>
              <button className="bg-[#ff014f] text-white font-bold text-lg px-5 hover:bg-[#930d35] py-1.5 rounded-md">
                Hire Me
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center px-20 text-white gap-3">
              {navItems.map((item, index) => (
                <li
                  onClick={() => setIsOpen(!isopen)}
                  key={index}
                  className="hover:bg-gray-100 text-center w-full py-2 rounded-md font-bold hover:text-slate-900"
                >
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveNavbar;
