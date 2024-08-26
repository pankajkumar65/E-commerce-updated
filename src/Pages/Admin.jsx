import React, { useState } from 'react';
import './CSS/Loginsignup.css';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../Context/AdminContext';

const Admin = ({ onSendmsg }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { setAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = { email, password };

    try {
      const response = await fetch('http://localhost:8080/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        alert("Login failed. Please check your credentials and try again.");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setAdmin(email);
        const Navshow = "third";
        onSendmsg(Navshow);

        // Show success message
        setShowSuccessMessage(true);

        // Navigate after a delay to allow the user to see the success message
        setTimeout(() => {
          navigate('/adminregis');
        }, 2000);
      } else {
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div>
      <div className='loginsignup' style={{ height: '100vh' }}>
        <div className="loginsignup-container" style={{ height: '500px' }}>
          <h1>Admin Login</h1>
          <div className="loginsignup-fields">
            <input
              type="email"
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
      
      {showSuccessMessage && (
        <div className="success-message">
          Login Successfully!
        </div>
      )}
    </div>
  );
};

export default Admin;
