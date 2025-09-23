import React from 'react';

const AboutCard = ({ title, description }) => {
  return (
    <div className="bg-[#1e293b] rounded-lg p-6 shadow-md border border-[#334155]">
      <h2 className="text-2xl font-bold text-[#f8fafc] mb-4">{title}</h2>
      {description}
    </div>
  );
};

export default AboutCard;