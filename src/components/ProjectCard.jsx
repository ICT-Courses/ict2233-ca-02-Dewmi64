import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description || "No description available."}</p>
    </div>
  );
};

export default ProjectCard;
