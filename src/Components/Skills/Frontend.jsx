import React from "react";

// Sample skills data
import { skillsData } from "../../Data/SkillsData";

const Frontend = () => {
  return (
    <section className="py-2 bg-gray-50 rounded-md">
      <h2 className="text-xl font-bold text-center mb-5">Frontend Skills</h2>
      <div className="w-full">
        {skillsData.frontend.map((skill, index) => (
          <div
            key={index}
            className="bg-white w-full rounded-lg shadow-md p-4 "
          >
            <div className="flex justify-between items-center">
             <span>{skill.icon}</span>
              <div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-gray-600 w-full">{skill.percentage}%</p>
              </div>
            </div>
            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-indigo-600 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Frontend;
