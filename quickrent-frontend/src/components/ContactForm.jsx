// import React from "react";
import "../styles/contact.css";

const ContactForm = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="cta">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;