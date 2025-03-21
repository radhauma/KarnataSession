import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "../styles.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-subheading">Have questions? We're here to help!</p>
      
      <div className="contact-grid">
        <div className="contact-card">
          <h3 className="contact-name">SAHELI</h3>
          <p className="contact-detail">
            <FaEnvelope className="contact-icon" /> patrasaheli499@gmail.com
          </p>
          <p className="contact-detail">
            <FaPhone className="contact-icon" /> +91 92089 16364
          </p>
        </div>

        <div className="contact-card">
          <h3 className="contact-name">MUSKAN</h3>
          <p className="contact-detail">
            <FaEnvelope className="contact-icon" /> muskann1309@gmail.com 
          </p>
          <p className="contact-detail">
            <FaPhone className="contact-icon" /> +91 89386 07254
          </p>
        </div>

        <div className="contact-card">
          <h3 className="contact-name">AKANKSHA</h3>
          <p className="contact-detail">
            <FaEnvelope className="contact-icon" /> akbisht9868@gmail.com
          </p>
          <p className="contact-detail">
            <FaPhone className="contact-icon" /> +91 90743 49839
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
