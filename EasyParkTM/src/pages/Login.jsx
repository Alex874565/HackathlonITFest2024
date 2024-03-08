import React, { useEffect } from 'react';
import '../stylesheets/Login.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const LoginScreen = () => {
    return(
        <div class="login-container">
        <div class="login-box">
          <h2>Login</h2>
          <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required />
    
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
    
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
};

function Login(){

    return (
    'hi'
    )
}

export default LoginScreen