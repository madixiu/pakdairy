"use client"
import React, { useState } from 'react';
import { MdEmail,MdAccountBox,MdOutlineSubject } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto p-6 rounded-lg bg-slate-50 shadow-xl">

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 mb-1 text-sm">
        <div className='flex flex-row items-center'>
            <MdAccountBox className='me-1'/>
            <span>نام</span>
          </div>
          
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder=""
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-1 text-sm">
          <div className='flex flex-row items-center'>
            <MdEmail className='me-1'/>
            <span>ایمیل</span>
          </div>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="ایمیل"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 mb-1 text-sm">
          <div className='flex flex-row items-center'>
            <MdOutlineSubject className='me-1'/>
            <span>موضوع</span>
          </div>
        </label>
        <textarea
          id="subject"
          name="subject"
          placeholder="موضوع"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 text-sm resize-none" // Added resize-none
        />
      </div>

      <button
        type="submit"
        className="w-20 p-2 bg-primary text-white rounded hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 text-sm"
      >
        ارسال
      </button>
    </form>
  );
};

export default ContactForm;