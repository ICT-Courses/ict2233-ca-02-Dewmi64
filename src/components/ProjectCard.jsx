import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"/>
        
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
