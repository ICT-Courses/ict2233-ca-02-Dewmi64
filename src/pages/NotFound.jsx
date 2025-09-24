import React from 'react';

const NotFound = () => {
  return (
    <div className="bg-[#0f172a] text-[#94a3b8] min-h-screen flex flex-col items-center justify-center text-center p-4">
      {/* 404 Heading */}
      <h1 className="text-9xl md:text-[10rem] font-extrabold text-white animate-pulse">404</h1>
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
        Page Not Found
      </h2>
      <p className="text-lg md:text-xl max-w-lg mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <a href="/" 
        className="px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-300 transform hover:scale-105">
        Go Back to Home
      </a>
    </div>
  );
};

export default NotFound;