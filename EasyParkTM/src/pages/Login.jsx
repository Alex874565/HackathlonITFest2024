import React from 'react';
import '../stylesheets/Login.css';
import Navbar from '../navbar/Navbar';
import { useParams } from 'react-router-dom';

function Login() {
  return (
    <div>
      <div className="login-container">
        <form id="loginForm" className="login-box">
          <div className= "login-field" />
          <h2>Login</h2>

          <label htmlFor="loginUsername">Username:</label>
          <input
            type="text"
            id="loginUsername"
            name="loginUsername"
            placeholder="Enter your username"
            required
          />

          <label htmlFor="loginPassword">Password:</label>
          <input
            type="password"
            id="loginPassword"
            name="loginPassword"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
        </form>
         </div>
      </div>
  );
}

export default Login;