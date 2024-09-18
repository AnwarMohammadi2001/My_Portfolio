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
import { SiMysql, SiMongodb } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa"; // Import the arrow icon

const Skills = () => {
  const frontendSkills = [
    { name: "React", icon: <FaReact />, percentage: 80 },
    { name: "HTML5", icon: <FaHtml5 />, percentage: 100 },
    { name: "CSS3", icon: <FaCss3Alt />, percentage: 95 },
    { name: "JavaScript", icon: <FaJs />, percentage: 90 },
  ];

  const backendSkills = [
    { name: "Python", icon: <FaPython />, percentage: 75 },
    { name: "Node.js", icon: <FaNodeJs />, percentage: 70 },
    { name: "MySQL", icon: <SiMysql />, percentage: 90 },
    { name: "MongoDB", icon: <SiMongodb />, percentage: 85 },
  ];

  const skillAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="skills" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-white text-center">
        My Skills
      </h2>

      {/* Two-column layout: Frontend and Backend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Frontend Skills */}
        <div className="relative border-l-4 border-blue-500 pl-8">
          <h3 className="text-2xl font-semibold mb-6 text-white">Frontend Development</h3>
          <div className="flex flex-col gap-6">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 rounded-lg shadow-lg p-4 hover:bg-gradient-to-r hover:from-blue-300 hover:via-blue-500 hover:to-blue-700 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
                variants={skillAnimation}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FaArrowRight className="text-white text-xl" />
                <div className="flex items-center space-x-4">
                  <div className="text-3xl text-white">{skill.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm text-gray-100">{skill.percentage}%</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-800 h-2.5 rounded-full"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white text-center">
            Backend Development
          </h3>
          <div className="flex flex-col gap-6">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 bg-gradient-to-r from-green-200 via-green-400 to-green-600 rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-green-300 hover:via-green-500 hover:to-green-700 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
                variants={skillAnimation}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FaArrowRight className="text-white text-xl" />
                <div className="flex items-center space-x-4">
                  <div className="text-5xl text-white">{skill.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{skill.name}</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                      <div
                        className="bg-green-800 h-2.5 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-100">{skill.percentage}%</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
