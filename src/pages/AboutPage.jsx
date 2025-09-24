import React from 'react';
import AboutCard from '../components/AboutCard';
import ProfilePicture from '../assets/Image/Profile Pic.jpg';

const AboutPage = () => {
  return (
    <main className="flex justify-center p-4 min-h-screen bg-[#0f172a] text-[#94a3b8] flex justify-center pt-20"> 
      <div className="w-full max-w-3xl"> 
    <section className= "flex-1 justify-center space-y-8 ">
    <div className="flex flex-col items-center text-center">
    <img 
    src={ProfilePicture} 
    alt="Profile" 
  className="w-64 h-64 rounded-full object-cover border-4 border-[#cbd5e1]" 
  />
      <h1 className="text-4xl md:text-5xl font-bold text-[#f8fafc] mb-4">
       <span className="text-[#cbd5e1]">About Me</span></h1>
    <p className="text-lg md:text-xl leading-relaxed">
              I am an undergraduate IT student at the University of Sri Jayewardenepura, pursuing a BSc in ICT. 
              I combine technical knowledge with creativity to build effective digital solutions. My interests include UI/UX design and project management. 
              I aim to grow into a role as a Project Manager, UI/UX Designer, or Business Analyst, contributing to impactful projects while continuously learning in the IT industry.
    </p>
    </div>
     <AboutCard
        title="Education"
        description={<p>BSc in ICT — University of Sri Jayewardenepura</p>}/>
      <AboutCard
        title="Technical Skills"
        description={<p>Python, C#, React, HTML, CSS, SQL, Tailwind CSS</p>}/>
        <AboutCard
        title="Soft Skills"
        description={<p>Communication, Teamwork, Problem-Solving, Project Management, Creativity</p>}/>
        <AboutCard
        title="Interest"
        description={<p>UI/UX Design, Project Management</p>}/>
    </section>
    </div>
    </main>
  );
};

export default AboutPage;

