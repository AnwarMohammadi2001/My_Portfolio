import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Branding */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Anwar's Portfolio</h2>
            <p className="text-gray-400">Crafting beautiful web experiences</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a
              href="/"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Home
            </a>
            <a
              href="/projects"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Contact
            </a>
            <a
              href="/about"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              About
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/AnwarMohammadi2001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Anwar Mohammadi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
