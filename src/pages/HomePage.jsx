import React from 'react';
import ProfilePicture from '../assets/Image/Profile Pic.jpg';


const HomePage = () => {
  return (
  <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:w-fit bg-blue-900">
  <div className='lg:w 1/3 ssm:w-fit'>
    <p className ='text-4xl mb-5 text-slate-300'>Hii, I'm</p>
      <h1 className="text-6xl text-white mb-5">Dewmini Karavita</h1>
    <hr/>
    <p className="mt-10 text-xl text-white">I'm Dewmini Karavita, an undergraduate IT student at the University of Sri Jayewardenepura, currently pursuing a BSc in ICT. With strong skills in UI/UX design, Python, C#, React, HTML, CSS, and SQL, I enjoy combining technical knowledge with creativity to build effective digital solutions. My key interests lie in UI/UX design and project management, areas where I can bring together both problem-solving and organizational skills. Looking ahead, my career goal is to grow into a role as a Project Manager, UI/UX Designer, or Business Analyst (BA), where I can contribute to impactful projects while continuously learning and evolving in the IT industry.</p>
 </div>

<div className='lg:w-1/3 ssm:w-fit'>
  <img src={ProfilePicture} alt="Profile Picture" width={550} height={(550)} />
</div>
</section>
 );
};
export default HomePage;
