import React from "react";

// Sample skills data
const skills = [
  { name: "HTML", percentage: 90, icon: "/path/to/html-icon.png" },
  { name: "CSS", percentage: 85, icon: "/path/to/css-icon.png" },
  { name: "JavaScript", percentage: 80, icon: "/path/to/js-icon.png" },
  { name: "React.js", percentage: 75, icon: "/path/to/react-icon.png" },
  { name: "Tailwind CSS", percentage: 90, icon: "/path/to/tailwind-icon.png" },
  { name: "Bootstrap", percentage: 70, icon: "/path/to/bootstrap-icon.png" },
];

const Frontend = () => {
  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-5">Frontend Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-12 w-12 mr-3"
              />
              <div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-gray-600">{skill.percentage}%</p>
              </div>
            </div>
            <div className="relative w-32 h-6 bg-gray-200 rounded-full overflow-hidden">
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
