import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's connect and build something amazing together</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Contact Information</h3>
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="contact-item-label">Email</p>
                  <a href="mailto:unisoldier2022@gmail.com" className="contact-item-value">
                    unisoldier2022@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="contact-item-label">Phone</p>
                  <a href="tel:+918447131813" className="contact-item-value">
                    +91 84471 31813
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="contact-item-label">Location</p>
                  <p className="contact-item-value">Manipal University Jaipur</p>
                </div>
              </div>

              <div className="contact-socials">
                <h4 className="contact-socials-title">Connect with me</h4>
                <div className="social-links">
                  <a 
                    href="https://linkedin.com/in/karan-garg-244b242b1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a 
                    href="https://github.com/Drakowarrior" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a 
                    href="mailto:unisoldier2022@gmail.com" 
                    className="social-link"
                  >
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-textarea"
                />
              </div>

              <button type="submit" size="lg" className="submit-btn">
                <FaPaperPlane size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;