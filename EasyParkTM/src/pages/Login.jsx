import React, { useState } from 'react';
import '../stylesheets/Login.css';
import $ from 'jquery';

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

  async function php_req(){
    var request;
    event.preventDefault();
    if (request){
        request.abort;
    }
    var form = $(this);
    
    var inputs = form.find("input, button");
    
    var serializedData = $("form :input").serialize();
    console.log(serializedData);

    inputs.prop("disabled", true);

    request = await $.ajax({
        url:"http://localhost/EasyParkTM/backend/login.php",
        type: "post",
        data: serializedData,
        success: (resp) => {
            console.log(resp);
            if (resp == "exists"){
                window.location.replace(`home/${email}/`)
            }else if (resp == "!exists"){
                window.alert("Wrong email/password.");
            }
        },
        always: (resp) => {
            inputs.prop("disabled", false);
            console.log(resp);
        }
    });
}

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
    php_req();
  };

  const getIsFormValid = () => { 
    return (
      email && validateEmail(email) && password.value.length >= 8
    )
   }; 

   const validateEmail = (email) => {
    // Implement your email validation logic here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

            <button id="login-button" type="submit" style={{ backgroundColor: 'green' }} disabled={!getIsFormValid()}>
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