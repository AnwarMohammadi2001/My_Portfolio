import React from "react";
import { Link } from "react-router-dom";
import multivenore from "../../assets/images/mutlivendore.png";
import portfolio from "../../assets/images/portfolio.png";
import restaurant from "../../assets/images/restaurant.png";

// Array of card data (outside the component)
const projects = [
  {
    id: 1,
    name: "Multivendor Restaurant System",
    image: multivenore, // Replace with your image URLs
    description: "A platform to manage multiple restaurants.",
    github: "https://github.com/your-repo-2",
  },
  {
    id: 2,
    name: "Portfolio Website",
    image: portfolio,
    description: "A personal portfolio to showcase projects",
    github: "https://github.com/your-repo-2",
  },
  {
    id: 3,
    name: "Restaurant Website",
    image: restaurant,
    description: "  A personal Restaurant",
    github: "https://github.com/your-repo-2",
  },

  // Add more projects as needed
];

const Projects = () => {
  return (
    <div id="projects" className=" mx-auto px-4 py-10">
      <div className="flex justify-center">
        <h1 className="text-white font-bold text-3xl pb-10">My Projects</h1>
      </div>
      {/* Grid layout for cards */}
      <div className=" container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden group relative"
          >
            {/* Image with hover effect */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-content transition-opacity duration-300 group-hover:opacity-30"
            />
            {/* Button appears on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                See on GitHub
              </a>
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
