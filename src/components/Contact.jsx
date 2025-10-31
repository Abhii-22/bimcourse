import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-left">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">
            We'd love to hear from you! Reach us for collaborations, training inquiries, 
            or general questions. Find us here 👇
          </p>

          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <p>XGCP+9J3, MRCR Layout, MC Layout, Vijayanagar, Bengaluru, Karnataka 560040</p>
            </div>
            <div className="info-item">
              <span className="info-icon">📧</span>
              <p>connect@medini.in</p>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <p>+91 99000 81006</p>
            </div>
          </div>
        </div>

        {/* Right Section - Google Map */}
        <div className="contact-map">
          <iframe
            title="BIM Course Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.015068456746!2d77.53398227491833!3d12.970887487344475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d00083446b3%3A0x350e2f5bbc9d0d11!2sMEDINI%20TECHNOLOGIES!5e0!3m2!1sen!2sin!4v1761542685031!5m2!1sen!2sin" 
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
      </div>
      
    </section>

    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Medini Technologies</h3>
          <p>Leading the future of digital construction with innovative BIM solutions.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            
            <a href="https://www.linkedin.com/company/medinitechnologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/medinitechnologies/" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Medini Technologies. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default Contact;
