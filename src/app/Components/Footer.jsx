// components/Footer.js

import React from 'react';
import SocialMediaIcons from './contact/SocialMediaIcons';
import { FaYoutube, FaWhatsapp, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-white text-primary  shadow-lg">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        {/* Quick Access Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">دسترسی سریع</h3>
          <ul className="space-y-2">
            <li>
              <a href="/home" className="hover:underline">
                خانه
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                درباره شرکت
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                اخبار
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                ارتباط با ما
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">ارتباط با ما</h3>
          <p>
            Email:{' '}
            <a href="mailto:info@example.com" className="hover:underline">
              info@pakdairy.com
            </a>
          </p>
          <p>
            Phone:{' '}
            <a href="tel:+1234567890" className="hover:underline">
              +982164960000
            </a>
          </p>
        </div>

        {/* Social Networks Section */}
        <div>
          <h3 className="text-lg font-bold mb-1">ما را دنبال کنید</h3>
          <div className="flex flex-row w-full">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-red-600 transition-colors duration-100 me-2"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://wa.me/989981440061"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500  transition-colors duration-100 mx-2"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.twitter.com/pakdairy_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-100 mx-2"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/pak.dairy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-100 mx-2"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center bg-white text-primary text-xs items-center justify-center">
        <span>&copy;</span>
        <span className="mx-1"> {new Date().getFullYear()} </span>
        <span>تمام حقوق این وب سایت برای شرکت پاک محفوظ می باشد. </span>
      </div>
    </footer>
  );
}

export default Footer;