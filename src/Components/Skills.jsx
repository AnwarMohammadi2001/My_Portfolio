import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  const frontendSkills = [
    { name: "React", icon: <FaReact />, percentage: 80 },
    { name: "HTML5", icon: <FaHtml5 />, percentage: 100 },
    { name: "CSS3", icon: <FaCss3Alt />, percentage: 95 },
    { name: "JavaScript", icon: <FaJs />, percentage: 90 },
  ];

  const backendSkills = [
    {
      name: "Python",
      icon: <FaPython />,

      percentage: 75,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,

      percentage: 70,
    },
    {
      name: "MySql",
      icon: <SiMysql />,

      percentage: 90,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,

      percentage: 85,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">
        My Skills
      </h2>

      {/* Two-column layout: Frontend and Backend */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Frontend Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white text-center">
            Frontend Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 hover:bg-gray-100 transition transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
              >
                <div className="text-4xl text-blue-500 mb-2">{skill.icon}</div>
                <h4 className="text-lg font-semibold">{skill.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{skill.level}</p>

                {/* Skill level bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{skill.percentage}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white text-center">
            Backend Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 hover:bg-gray-100 transition transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
              >
                <div className="text-4xl text-green-500 mb-2">{skill.icon}</div>
                <h4 className="text-lg font-semibold">{skill.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{skill.level}</p>

                {/* Skill level bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{skill.percentage}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
