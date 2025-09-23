import React from 'react';

const ContactCard = ({ icon, label, link }) => {
  return (
    <a 
      href={link} target="_blank" rel="noopener noreferrer">
        <div className="text-xl text-blue-400">{icon}</div>
      <div className="flex-1">
        <h3 className="font-semibold text-white">{label}</h3>
        <p className="text-sm text-[#94a3b8] truncate">{link.replace(/(mailto:|tel:|https:\/\/|http:\/\/)/, '')}</p>
      </div>
      </a>
      
    );
};

export default ContactCard;