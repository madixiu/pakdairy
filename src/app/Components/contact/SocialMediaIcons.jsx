import React from 'react';
import { FaYoutube, FaWhatsapp, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-row w-full justify-between">
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-red-600 transition-colors duration-100"
      >
        <FaYoutube size={20} />
      </a>
      <a
        href="https://wa.me/989981440061"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-500  transition-colors duration-100"
      >
        <FaWhatsapp size={20} />
      </a>
      <a
        href="https://www.twitter.com/pakdairy_"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors duration-100"
      >
        <FaTwitter size={20} />
      </a>
      <a
        href="https://www.instagram.com/pak.dairy/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500 transition-colors duration-100"
      >
        <FaInstagram size={20} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;