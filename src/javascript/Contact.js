import React, { useState } from 'react';
import '../css/contact.css'; // Import the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission here
    console.log(formData);
    // Assuming you have obtained your access key from Web3Forms
    const accessKey = "637b2841-b8d7-45d7-8b07-bd3be967d50e";
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        ...formData
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2 className="form-title">Get in Touch</h2>
        {submitted && <p className="submit-message">Your message has been sent!</p>}
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="form-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
