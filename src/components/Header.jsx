import React from 'react';
import { Link } from 'react-router-dom';



const Header=()=>{
    return (<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-[#000000] text-white " > 
    <div className="text-xl font-bold">My Portfolio</div>
    <nav>
        <ul className="flex space-x-4 ml-auto">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Project</Link></li>
          <li><Link to="/contact">Contact</Link></li> </ul>
    </nav>
        
        
    </header>
    );
    }
export default Header;
