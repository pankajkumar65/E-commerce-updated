import React, { useState } from 'react'
import './CSS/Loginsignup.css'
import { Link, useNavigate } from 'react-router-dom'
import { useClient } from '../Context/ClientContext'

const Login = ({ onSendmsg }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { client, setClient } = useClient();
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault() // Prevent the default form submission behavior

    // Prepare data to be sent
    const loginData = { email, password }

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })

      if (!response.ok) {

        throw new Error('Network response was not ok')
      }

      const data = await response.json()

      if (data.success) {
        // Optionally handle successful login, e.g., storing tokens, updating state, etc.
        setClient(email)
        const Navshow = "second"
        onSendmsg(Navshow)

        // Redirect to /shop or wherever appropriate
        navigate('/shop')
      } else {
        // Handle login failure
        alert('Login failed. Please check your credentials and try again.')
      }
    } catch (error) {
      alert('Login failed. Please check your credentials and try again.')
      console.error('There was a problem with the fetch operation:', error)
    }
  }

  return (
    <div className='loginsignup' style={{ height: "100vh" }}>
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
          Not Registered? <Link to="/"><span style={{ cursor: 'pointer', textDecorationLine: "none" }}>Signup here</span></Link>
        </p>
        <div className="loginsignup-agree">
        </div>
      </div>
    </div>
  )
}

export default Login
