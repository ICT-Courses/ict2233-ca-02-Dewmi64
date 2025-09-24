import React from 'react';

const ContactCard = ({ icon, label, link }) => {
  return (
    <a 
      href={link} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-lg bg-[#334155] hover:bg-[#475569] transition-colors duration-300 shadow-md"
    >
        
        <div className="text-xl text-blue-400">{icon}</div>
      <div className="flex-1">
        <h3 className="font-semibold text-white">{label}</h3>
        <p className="text-sm text-[#94a3b8] truncate">{link.replace(/(mailto:|tel:|https:\/\/|http:\/\/)/, '')}</p>
      </div>
      </a>
      
    );
};

export default ContactCard;