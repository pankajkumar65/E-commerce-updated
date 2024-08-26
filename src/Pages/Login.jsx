import React, { useState, useEffect } from 'react';
import './CSS/Loginsignup.css';
import { Link, useNavigate } from 'react-router-dom';
import { useClient } from '../Context/ClientContext';

const Login = ({ onSendmsg, showLogoutMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { client, setClient } = useClient();
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(showLogoutMessage);

  useEffect(() => {
    if (showLogoutMessage) {
      setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
    }
  }, [showLogoutMessage]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = { email, password };

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.success) {
        setClient(email);
        onSendmsg("second");
        navigate('/shop');
      } else {
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      alert('Login failed. Please check your credentials and try again.');
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className='loginsignup' style={{ height: "100vh" }}>
      {showMessage && <div className="success-message">Logout Successfully!</div>} {/* Logout message */}
      <div className="loginsignup-container" style={{ height: "500px" }}>
        <Link to="/shop"><h1>Login</h1></Link>
        <form onSubmit={handleSubmit} className="loginsignup-fields">
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
          <button type="submit">Login</button>
        </form>
        <p className="loginsignup-login">
          Not Registered? <Link to="/Signup"><span style={{ cursor: 'pointer', textDecorationLine: "none" }}>Signup here</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
