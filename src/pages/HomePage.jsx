import React from 'react';
import ProfilePicture from '../assets/Image/Profile Pic.jpg';


const HomePage = () => {
  return (
  <section className="flex flex-col-reverse md-flex-row justify-center items-center p-10 space-x-10 lg:flex-row ssm:w-fit bg-[#0f172a] min-h-screen">
  <div className='flex flex-col justify-center itemscenter md:items-start text-center md:text-left md:lg:w 1/3 '>
    <p className ='text-4xl mb-5  md:text-5xl text-slate-300'>Hii, I'm</p>
      <h1 className="text-4xl md:text-5xl font-bold text-[#f8fafc] mb-4 text-[#cbd5e1]">Dewmini Karavita</h1>
    <hr/>
    <p className="mt-10 text-xl text-white text-lg max-w-lg ">I'm an undergraduate IT student at the University of Sri Jayewardenepura,
          currently pursuing a BSc in ICT.Passionate about {" "} 
          <span className="text-sky-400 font-medium"></span>and{" "}<span className="text-sky-400 font-medium">Project Management and UI/UX with skills in Python, C#, React, HTML, CSS, and SQL.Figma</span>, </p>
 </div>

<div className='lg:w-1/3 ssm:w-fit'>
  <img src={ProfilePicture} alt="Profile Picture" width={400} height={(400)} 
  className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-lg object-cover border-4 border-sky-900 "/>
</div>
</section>
 );
};
export default HomePage;
