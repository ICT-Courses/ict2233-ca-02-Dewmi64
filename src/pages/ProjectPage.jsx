import React from "react";
import ProjectCard from "../components/ProjectCard";
import NJKImage from "../assets/Image/NJK Homes .jpg"; 
import GPAapp from "../assets/Image/GPA App.jpg";
import SILKshield from "../assets/Image/Silkshield.jpg";

const ProjectPage = () => {

  
  const projects = [
    {
      id: 1,
      name: "GPA+MIND BOOST Application",
      description: "This is my very first project.GPA Mind Boost App is a desktop-based academic performance management system built using C# and Visual Studio. This application is specially designed for university and school students to track,analyze, and improve their GPA in a user-friendly way.",
      image: GPAapp,
      github: "",
      live: "",
    },
    {
      id: 2,
      name: "Silkshield Digital Invoice System",
      description: "The Customer Management module of SilkShield Digital Management System is a standalone desktop application developed using C# and Visual Studio with MySQL as the backend. This module allows users to add, view, update, and delete customer records efficiently, providing a complete CRUD functionality for managing customer data.",
      image:SILKshield,
      github: "",
      live: "",
    },
    {
      id: 3,
      name: "NJK Homes and Constructions Website",
      description: "NJK Homes and Constructions is a simple and elegant website designed to showcase the company and its services. The site provides essential information in a clear, user-friendly way, making it easy for visitors to learn about the company and get in touch.",
      image: NJKImage, 
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
