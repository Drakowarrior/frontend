import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img 
            src="https://customer-assets.emergentagent.com/job_81eeb2e9-8f57-4827-9b18-8c53c40db609/artifacts/wli040ny_karan_logo-removebg-preview.png" 
            alt="KG Logo" 
            className="footer-logo-img"
          />
          <p className="footer-name">Karan Garg</p>
        </div>

        <div className="footer-socials">
          <a 
            href="https://linkedin.com/in/karan-garg-244b242b1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="https://github.com/Drakowarrior" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="mailto:unisoldier2022@gmail.com" 
            className="footer-social-link"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        <p className="footer-copyright">
          © {currentYear} Karan Garg. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;