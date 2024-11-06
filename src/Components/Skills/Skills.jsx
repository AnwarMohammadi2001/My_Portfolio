import React from "react";
import SkillsItems from "./SkillsItems";

const Skills = () => {
  return (
    <section id="skills">
      <div className="px-5 mt-10">
        <h2 className="text-center py-5 text-3xl font-bold text-slate-900 dark:text-gray-100 ">
          My Skills
        </h2>
        <SkillsItems />
      </div>
    </section>
  );
};

export default Skills;
