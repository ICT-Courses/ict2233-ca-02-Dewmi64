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
    <main className="min-h-screen bg-[#0f172a] text-[#cbd5e1] p-8 flex justify-center">
      <div className="w-full max-w-5xl">
        

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#f8fafc] mb-2">Contact Me</h1>
          <p className="text-lg md:text-xl">
            I'm always open to new opportunities and collaborations. Feel free to reach out to me!</p>
        </div>
  
      
      {isSubmitted && (
        <div className="bg-green-500 text-white p-4 rounded-md mb-6 text-center">
          Your message has been received. Thank you!
        </div>
      )}

      
      <div className="flex flex-col lg:flex-row gap-8">

      <section className="lg:w-1/2 bg-[#1e293b] p-8 rounded-lg shadow-lg flex-1 space-y-6">
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
        link="tel:"
      />
    </section>

      {/* Right column */}
      <section className="lg:w-1/2 bg-[#1e293b] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#f8fafc] mb-6">Send a Message</h2>
            
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
     </div>
      </div>
    </main>
     
  );
};

export default ContactPage;