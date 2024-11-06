import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 bg-gray-200 border-t-2 border-slate-900 dark:border-gray-100 dark:text-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Branding */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl text-center md:text-start font-bold py-3 md:py-1">
              Anwar's Portfolio
            </h2>
            <p className="dark:text-gray-300 text-slate-600">
              Bringing ideas to life through code
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-5 md:space-x-8 mb-6 md:mb-0 text-slate-800 hover:text-slate-700 dark:text-gray-400 dark:hover:text-white">
            <a href="#home" className="transition duration-300">
              Home
            </a>
            <a href="#aboutme" className=" transition duration-300">
              About Me
            </a>
            <a href="#projects" className=" transition duration-300">
              Projects
            </a>
            <a href="#skills" className=" transition duration-300">
              Skills
            </a>
            <a href="#contact" className=" transition duration-300">
              Contact
            </a>
          </div>

          {/* Social Media Links */}
        </div>

        {/* Divider */}
        <div className="relative w-full my-8">
          <hr className="border-slate-900 dark:border-gray-300 border-2" />
          <div className="absolute left-1/2 transform bg-gray-200 dark:bg-slate-900 px-5 -translate-x-1/2 -top-3 flex space-x-6 text-slate-800 hover:text-slate-700 dark:text-gray-400 dark:hover:text-white">
            <a
              href="https://github.com/AnwarMohammadi2001"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 text-2xl hover:text-slate-700 dark:text-gray-400 dark:hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anwar-mohammadi/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 text-2xl hover:text-slate-700 dark:text-gray-400 dark:hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/love_hazara1"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 text-2xl hover:text-slate-700 dark:text-gray-400 dark:hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/anwar.lashkari.5"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 text-2xl hover:text-slate-700 dark:text-gray-400 dark:hover:text-white"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className=" ">
          <p className="text-center text-slate-700 dark:text-gray-500">
            © {new Date().getFullYear()} Anwar Mohammadi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
