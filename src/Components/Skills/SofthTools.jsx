import React from "react";
import { skillsData } from "../../Data/SkillsData";

const SofthTools = () => {
  return (
    <section className="py-2 bg-gray-50 rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4">SoftWare Skills</h2>
      <div className="space-y-4 px-2">
        {skillsData.softSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-5  px-4 py-2"
          >
            {/* Skill Icon */}
            <div className="text-3xl text-indigo-600">{skill.icon}</div>

            {/* Skill Details with Progress Bar */}
            <div className="w-full">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {skill.name}
                </h3>
                <span className="text-gray-600 text-sm">
                  {skill.percentage}%
                </span>
              </div>
              <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-indigo-600 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SofthTools;
