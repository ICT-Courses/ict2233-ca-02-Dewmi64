import React from "react";
import ProjectCard from "../components/ProjectCard";

const ProjectPage = () => {

  
  const projects = [
    {
      id: 1,
      name: "GPA+MIND BOOST Application",
      description: "",
      image: "",
      github: "",
      live: "",
    },
    {
      id: 2,
      name: "Inventory Management System",
      description: "",
      image: "",
      github: "",
      live: "",
    },
    {
      id: 3,
      name: "NJK Homes and Constructions Website",
      description: "",
      image: "", 
      github: "", 
      live: "", 
    },
  ];

  return (
    <div className="bg-[#0f172a] text-[#94a3b8] min-h-screen pt-20 pb-10">
      <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">My Projects</h1>
      <p className="text-lg md:text-xl">Here are some of the projects I've built.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
