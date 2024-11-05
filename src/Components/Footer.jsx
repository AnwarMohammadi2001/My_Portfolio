import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Branding */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl text-center md:text-start font-bold py-3 md:py-1">
              Anwar's Portfolio
            </h2>
            <p className="text-gray-400">Bringing ideas to life through code</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-5 md:space-x-8 mb-6 md:mb-0">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Home
            </a>
            <a
              href="#aboutme"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Contact
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
              href="https://www.linkedin.com/in/anwar-mohammadi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/love_hazara1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/anwar.lashkari.5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 text-2xl"
            >
              <FaFacebook />
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
