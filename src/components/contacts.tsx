import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import "../styles/contacts.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <a href="mailto:ton.email@example.com" className="contact-item">
        <Mail size={24} />
        <span>meriam84400@gmail.com</span>
      </a>
      <a href="tel:+33123456789" className="contact-item">
        <Phone size={24} />
        <span>+33 7 68 60 92 75</span>
      </a>
      <a
        href="https://www.linkedin.com/in/meriam-youssef-33a841332/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <Linkedin size={24} />
        <span>LinkedIn</span>
      </a>
    </div>
  );
};

export default Contact;
