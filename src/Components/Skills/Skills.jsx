import React from "react";
import SkillsItems from "./SkillsItems";

const Skills = () => {
  return (
    <section id="skills">
      <div className="px-5 my-8">
        <h2 className="text-center py-5  text-3xl font-bold text-slate-900 dark:text-gray-100 ">
          My Skills
        </h2>
      </div>
        <SkillsItems />
    </section>
  );
};

export default Skills;
