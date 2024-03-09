import React, { useState } from 'react';
import '../stylesheets/Login.css';
import Navbar from '../navbar/Navbar';
import { useParams } from 'react-router-dom';

const PasswordErrorMessage = () => {
  return (
    <p className="loginFieldError">Parola trebuie să conțină cel puțin 8 caractere</p>
  )
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword({ value, isTouched: true });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <form id="loginForm" className="login-box" onSubmit={handleSubmit}>
          <fieldset id='login-fieldset'>
            <div className="login-title" />
            <h2>Autentificare</h2>

            <div className="loginField">
              <label className="login-label" htmlFor="loginEmail">Email<sup>*</sup> </label>
              <input
                className='login-input'
                type="text"
                id="loginEmail"
                name="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Inserați emailul"
                required
              />
            </div>

            <div className="login-field">
              <label className="login-label" htmlFor="loginPassword">Parolă<sup>*</sup></label>
              <input
                className='login-input'
                type="password"
                id="loginPassword"
                name="password"
                value={password.value}
                onChange={handleInputChange}
                onBlur={() => setPassword({ ...password, isTouched: true })}
                placeholder="Inserați parola"
                required
              />
              {password.isTouched && password.value.length < 8 ? (
                <PasswordErrorMessage />
              ) : null}
            </div>

            <button id="login-button" type="submit" style={{ backgroundColor: 'green' }}>
              Conectează-te
            </button>
            <p id="to-register">Nu ai cont? <a href="/register">Înregistrează-te aici</a></p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Login;