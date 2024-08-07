import React, { useState } from 'react';
import './CSS/Loginsignup.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    agree: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNo: formData.phoneNo,
          email: formData.email,
          password: formData.password,
          dob: formData.dob,
        }),
      });

      if (response.ok) {
        alert('Account created successfully');
        navigate('/login');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'An error occurred'}`);
      }
    } catch (error) {
      
      alert(error);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className="loginsignup-fields">
          <input
            type="text"
            name="firstName"
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phoneNo"
            placeholder='Phone number'
            value={formData.phoneNo}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <input
            type="Date"
            name="dob"
            placeholder='Date of Birth' required
            value={formData.dob}
            onChange={handleChange}
          />
          <button type="submit">Signup</button>
        </form>
        <p className="loginsignup-login">
          Already have an account? <Link to="/login"><span style={{ cursor: 'pointer' }}>Login here</span></Link>
        </p>
        <div className="loginsignup-agree">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            style={{ cursor: 'pointer' }}
          />
          <p>By continuing I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
