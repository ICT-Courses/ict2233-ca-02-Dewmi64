import React from 'react';
import ProfilePicture from '../assets/Image/Profile Pic.jpg';

const HomePage = () => {
  return (
  <section className="flex flex-col-reverse md-flex-row justify-center items-center p-10 space-x-10 lg:flex-row ssm:w-fit bg-[#0f172a] min-h-screen">
  <div className='flex flex-col justify-center itemscenter md:items-start text-center md:text-left md:lg:w 1/3 '>
    <p className ='text-4xl mb-5  md:text-5xl text-slate-300 animate-fadeInSlideUp'>Hello, I'm</p>
      <h1 className="text-4xl md:text-5xl font-bold text-[#f8fafc] mb-4 text-[#cbd5e1] animate-fadeInSlideUp">Dewmini Karavita</h1>
       <p className="text-xl md:text-xl text-[#f8fafc] mb-4 text-[#cbd5e1]/80 animate-fadeInSlideUp">Undergraduate (BSc in ICT, USJ)</p>
    <hr/>
    <p className="mt-10 text-xl text-white text-lg max-w-lg animate-fadeInSlideUp">I'm an undergraduate IT student at the University of Sri Jayewardenepura,
          currently pursuing a BSc in ICT.Passionate about {" "} 
          <span className="text-sky-400 font-medium"></span>and{" "}<span className="text-sky-400 font-medium">Project Management and UI/UX with skills in Python, C#, React, HTML, CSS, SQL and Figma</span> </p>
       
       <div className="flex flex-colsm:flex-row sm:justify-center mt-6 flex gap-5">
          <a href="/projects"
            className="px-6 py-3 rounded-xl bg-sky-500 text-white font-medium shadow-md hover:shadow-lg hover:bg-sky-600 transition-all duration-300">
              View My Work</a>
          <a href="/contact"
            className="px-6 py-3 rounded-xl border border-sky-400 text-sky-400 font-medium hover:bg-sky-400 hover:text-white transition-all duration-300">
              Contact Me</a>
        </div>   
 </div>
 

<div className='lg:w-1/3 ssm:w-fit'>
  <img src={ProfilePicture} alt="Profile Picture" width={400} height={(400)} 
  className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-lg object-cover border-4 border-sky-900 "/>
</div>
</section>
 );
};
export default HomePage;
