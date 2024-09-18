import React from "react";
import { FaCode, FaInfoCircle } from "react-icons/fa"; // Import icons
import multivenore from "../../assets/images/mutlivendore.png";
import portfolio from "../../assets/images/portfolio.png";
import restaurant from "../../assets/images/restaurant.png";
import { BiShow } from "react-icons/bi";
// Array of card data
const projects = [
  {
    id: 1,
    name: "Multivendor Restaurant System",
    image: multivenore,
    description: "A platform to manage multiple restaurants.",
    github: "https://github.com/your-repo-multivendor",
    details: "/multivendor-details", // Add path for more details page
  },
  {
    id: 2,
    name: "Portfolio Website",
    image: portfolio,
    description: "A personal portfolio to showcase projects.",
    github: "https://github.com/your-repo-portfolio",
    details: "/portfolio-details",
  },
  {
    id: 3,
    name: "Restaurant Website",
    image: restaurant,
    description: "A restaurant website for food delivery.",
    github: "https://github.com/your-repo-restaurant",
    details: "/restaurant-details",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="mx-auto px-4 py-10">
      <div className="flex justify-center">
        <h1 className="text-white font-bold text-3xl pb-10">My Latest Work</h1>
      </div>
      {/* Grid layout for cards */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg ring-1 ring-white overflow-hidden group relative"
          >
            {/* Image with hover effect */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-40"
            />
            {/* Button appears on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
              <div className="space-x-4 flex">
                {/* See the Code Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-white border-2  p-3 rounded-full hover:bg-gray-100 hover:text-black flex items-center space-x-2"
                >
                  <FaCode size={28} />
                 
                </a>
                {/* More Details Button */}
                <a
                  href={project.details}
                   className="bg-transparent text-white border-2  p-3 rounded-full hover:bg-gray-100 hover:text-black flex items-center space-x-2"
                >
                  <BiShow size={28} />
             
                </a>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
