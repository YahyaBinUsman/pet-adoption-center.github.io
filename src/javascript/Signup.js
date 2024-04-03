// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Signup.css'; // Import your custom CSS for styling

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here

    // Example: Navigate to the home page after successful signup
    navigate('/');
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Sign Up</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-input"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" className="form-button">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
