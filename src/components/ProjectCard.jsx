import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description || "No description available."}</p>
      {project.topics && project.topics.length > 0 && (
        <ul>
          {project.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      )}

      {/* Links */}
      <div>
        {project.html_url && (
          <a href={project.html_url} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {project.homepage && (
          <a href={project.homepage} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
            Live Demo
          </a>
        )}
      </div>
      
    </div>
    
  );
};

export default ProjectCard;
