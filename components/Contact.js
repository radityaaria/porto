import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Get in Touch
        </h2>
        <div className="flex justify-center space-x-4">
          <div className='flex flex-row items-center space-x-1'>
            <MdOutlineMailOutline className='text-white text-lg'/>
            <a
              href="mailto:your.email@example.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Email
            </a>
          </div>
          <div className='flex flex-row items-center space-x-1'>
            <FaGithub className='text-white text-lg'/>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </div>
          <div className='flex flex-row items-center space-x-1'>
            <FaLinkedin className='text-white text-lg'/>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 