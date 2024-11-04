import { div } from "framer-motion/client";
import React, { useState } from "react";
import { BsTools } from "react-icons/bs";
import { FaAppStore, FaNodeJs, FaReact, FaTools } from "react-icons/fa";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";

import SofthTools from "./SofthTools";

const SkillsItems = () => {
  const [activeTap, setActiveTab] = useState("Frontend");
  const renderTabContent = () => {
    if (activeTap === "Frontend") {
      return (
        <div>
          <Frontend />
        </div>
      );
    } else if (activeTap === "Backend") {
      return (
        <div>
          <Backend />
        </div>
      );
    } else if (activeTap === "Tools") {
      return (
        <div>
          <Tools />
        </div>
      );
    } else if (activeTap === "SoftTools") {
      return (
        <div>
          <SofthTools />
        </div>
      );
    }
  };
  return (
    <div className="md:container grid grid-cols-1 md:grid-cols-2 ">
      <div className="py-5 md:px-10">
        <div className="grid grid-cols-2 gap-10 px-5 md:px-10">
          <div
            onClick={() => setActiveTab("Frontend")}
            className={`md:h-28 h-24 relative cursor-pointer  rounded-md border-2 bg-transparent md:text-2xl text-lg text-white font-bold flex justify-center  items-end pb-5 md:pb-0 md:items-center ${
              activeTap === "Frontend"
                ? "bg-gray-700 border-gray-100 text-[#2bb987] border-2"
                : ""
            } `}
          >
            <h1>Frontend</h1>

            <span className="absolute -left-3 -top-5 border p-1 rounded-lg shadow-lg bg-[#1E293B]">
              <FaReact
                className={` md:size-14 size-10 ${
                  activeTap === "Frontend"
                    ? " text-[#2bb987] "
                    : "text-blue-400"
                }`}
              />
            </span>
          </div>
          <div
            onClick={() => setActiveTab("Backend")}
            className={`md:h-28 h-24 relative cursor-pointer  rounded-md border-2 bg-transparent md:text-2xl text-lg text-white font-bold flex justify-center  items-end pb-5 md:pb-0 md:items-center ${
              activeTap === "Backend"
                ? "bg-gray-700 border-gray-100 text-[#2bb987] border-2"
                : ""
            } `}
          >
            <h1>Backend</h1>

            <span className="absolute -left-3 -top-5 border p-1 rounded-lg shadow-lg bg-[#1E293B]">
              <FaNodeJs
                className={`  md:size-14 size-10 ${
                  activeTap === "Backend"
                    ? " text-[#2bb987]"
                    : "text-green-500 "
                }`}
              />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 px-10 mt-14">
          <div
            onClick={() => setActiveTab("Tools")}
            className={`md:h-28 h-24 relative cursor-pointer  rounded-md border-2 bg-transparent md:text-2xl text-lg text-white font-bold flex justify-center  items-end pb-5 md:pb-0 md:items-center ${
              activeTap === "Tools"
                ? "bg-gray-700 border-gray-100 text-[#2bb987] border-2"
                : ""
            }`}
          >
            <h1>Tools</h1>

            <span className="absolute -left-3 -top-5 border p-1 rounded-lg shadow-lg bg-[#1E293B]">
              <BsTools
                size={56}
                className={`  md:size-14 size-10 ${
                  activeTap === "Backend"
                    ? " text-[#2bb987]"
                    : "text-green-500 "
                }`}
              />
            </span>
          </div>
          <div
            onClick={() => setActiveTab("SoftTools")}
            className={`md:h-28 h-24 relative cursor-pointer  rounded-md border-2 bg-transparent md:text-2xl text-lg text-white font-bold flex justify-center  items-end pb-5 md:pb-0 md:items-center ${
              activeTap === "SoftTools"
                ? "bg-gray-700 border-gray-100 text-[#2bb987] border-2"
                : ""
            }`}
          >
            <h1 className="cursor-pointer">Softh Skill</h1>

            <span className="absolute -left-3 -top-5 border p-1 rounded-lg shadow-lg bg-[#1E293B]">
              <FaAppStore
                className={`  md:size-14 size-10 ${
                  activeTap === "Backend"
                    ? " text-[#2bb987]"
                    : "text-green-500 "
                }`}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className=" w-[500px]  rounded-lg border border-white">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default SkillsItems;
