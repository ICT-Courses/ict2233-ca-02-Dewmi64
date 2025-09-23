import React from 'react';

const ContactCard = ({ icon, label, link }) => {
  return (
    <a 
      href={link} target="_blank" rel="noopener noreferrer"></a>
    );
};

export default ContactCard;