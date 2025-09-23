import React, { useState } from 'react';
import ContactCard from '../components/ContactCard';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";



const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // validation functions
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';}

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Clear form
    }
  };

  return (
    
    <section className="bg-[#1e293b] p-8 rounded-lg shadow-lg lg:w-1/2">
      <h1>Contact Page</h1>
      
      {isSubmitted && (
        <div className="bg-green-500 text-white p-4 rounded-md mb-6 text-center">
          Your message has been received. Thank you!
        </div>
      )}
      <section className="space-y-6 lg:space-y-4 lg:w-1/2 mb-8 lg:mb-0">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#f8fafc] text-center lg:text-left">Get in Touch</h2>
      <ContactCard
        icon={<FaLinkedin />}
        label="LinkedIn"
        link=""
      />
      <ContactCard
        icon={<FaGithub />}
        label="GitHub"
        link=""
      />
      <ContactCard
        icon={<FaEnvelope />}
        label="Email"
        link=""
      />
      <ContactCard
        icon={<FaPhone />}
        label="Phone Number"
        link=""
      />
    </section>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#334155] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"/>
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>
        
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#334155] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"/>
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>
        
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 rounded-lg bg-[#334155] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"></textarea>
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">Send Message
        </button>
      </form>
     </section>
     
     
  );
};

export default ContactPage;