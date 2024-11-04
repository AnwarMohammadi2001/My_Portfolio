import { div } from "framer-motion/client";
import React, { useState } from "react";
import { BsTools } from "react-icons/bs";
import { FaAppStore, FaNodeJs, FaReact, FaTools } from "react-icons/fa";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";
import SfthTools from "./SfthTools";

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
          <SfthTools />
        </div>
      );
    }
  };
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 ">
      <div className="py-5 px-10">
        <div className="grid grid-cols-2 gap-10 px-10">
          <div
            onClick={() => setActiveTab("Frontend")}
            className={`h-28 relative cursor-pointer  rounded-md border-2 bg-transparent text-2xl text-white font-bold flex justify-center items-center ${
              activeTap === "Frontend"
                ? "bg-gray-700 border-gray-100 text-[#2bb987] border-2"
                : ""
            } `}
          >
            <h1>Frontend</h1>

            <span className="absolute -left-3 -top-5 border p-1 rounded-lg shadow-lg bg-[#1E293B]">
              <FaReact
                size={56}
                className={` ${
                  activeTap === "Frontend"
                    ? " text-[#2bb987] "
                    : "text-blue-400"
                }`}
              />
            </span>
          </div>
          <div
            onClick={() => setActiveTab("Backend")}
            className={`h-28 relative cursor-pointer  rounded-md border-2 bg-transparent text-2xl text-white font-bold flex justify-center items-center ${
              activeTap === "Backend"
                ? "bg-gray-700 border-gray-100 text-[#2bb987] border-2"
                : ""
            } `}
          >
            <h1>Backend</h1>

            <span className="absolute -left-3 -top-5 border p-1 rounded-lg shadow-lg bg-[#1E293B]">
              <FaNodeJs
                size={56}
                className={` ${
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
            className={`h-28 relative  cursor-pointer rounded-md border-2 bg-transparent text-2xl text-white font-bold flex justify-center items-center ${
              activeTap === "Tools"
                ? "bg-gray-700 border-gray-100 text-[#2bb987] border-2"
                : ""
            }`}
          >
            <h1>Tools</h1>

            <span className="absolute -left-3 -top-5 border p-1 rounded-lg shadow-lg bg-[#1E293B]">
              <BsTools size={56} className="" />
            </span>
          </div>
          <div
            onClick={() => setActiveTab("SoftTools")}
            className={`h-28 cursor-pointer relative  rounded-md border-2 bg-transparent text-2xl text-white font-bold flex justify-center items-center ${
              activeTap === "SoftTools"
                ? "bg-gray-700 border-gray-100 text-[#2bb987] border-2"
                : ""
            }`}
          >
            <h1 className="cursor-pointer">Softh Skill</h1>

            <span className="absolute -left-3 -top-5 border p-1 rounded-lg shadow-lg bg-[#1E293B]">
              <FaAppStore size={56} className="" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="h-full w-[500px]  rounded-lg border border-white">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default SkillsItems;
