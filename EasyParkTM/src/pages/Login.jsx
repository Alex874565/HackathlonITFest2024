import React, { useEffect } from 'react';
import '../stylesheets/Login.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Login(){
    return(
        <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form id="loginForm">
            <label htmlFor="loginUsername">Username:</label>
            <input type="text" id="loginUsername" name="loginUsername" required />
    
            <label htmlFor="loginPassword">Password:</label>
            <input type="password" id="loginPassword" name="loginPassword" required />
    
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
};

export default Login