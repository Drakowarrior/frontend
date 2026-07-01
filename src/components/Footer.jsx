import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = ({ theme }) => {
  const isDark = theme === 'dark';
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 border-t px-6 transition-colors duration-300 ${
      isDark ? 'bg-bgDark/40 border-gray-800' : 'bg-white border-gray-100'
    }`}>
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Info */}
        <div className="flex items-center gap-3">
          <img 
            src={process.env.PUBLIC_URL + '/karan_logo-removebg-preview.png'} 
            alt="Karan Garg Logo" 
            className="h-8 w-auto object-contain"
          />
          <span className="font-display font-bold text-sm tracking-wide">
            Karan Garg
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 font-body">
          © {currentYear} Karan Garg. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/karan-garg-244b242b1"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg border transition-all ${
              isDark 
                ? 'border-gray-800 bg-gray-900/50 hover:bg-gray-800 hover:text-white text-gray-400' 
                : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-600 hover:text-indigo-600'
            }`}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="https://github.com/Drakowarrior"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg border transition-all ${
              isDark 
                ? 'border-gray-800 bg-gray-900/50 hover:bg-gray-800 hover:text-white text-gray-400' 
                : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-600 hover:text-black'
            }`}
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="mailto:unisoldier2022@gmail.com"
            className={`p-2 rounded-lg border transition-all ${
              isDark 
                ? 'border-gray-800 bg-gray-900/50 hover:bg-gray-800 hover:text-white text-gray-400' 
                : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-600 hover:text-rose-500'
            }`}
            aria-label="Email"
          >
            <FaEnvelope size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;