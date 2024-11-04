import React from "react";
import SkillsItems from "./SkillsItems";

const Skills = () => {
  return (
    <div>
      <div className="px-5 mt-10">
        <h2 className="text-center py-5 text-3xl font-bold text-gray-100 ">
          My Skills
        </h2>
        <SkillsItems />
      </div>
    </div>
  );
};

export default Skills;
