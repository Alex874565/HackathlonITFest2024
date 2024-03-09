import React, { useEffect } from 'react';
import '../stylesheets/Register.css';
import $ from 'jquery';
import {useState} from "react"; 
 
const PasswordErrorMessage = () => { 
 return ( 
   <p className="FieldError">Parola trebuie să conțină cel puțin 8 caractere</p> 
 ); 
}; 
 
function Register() { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState({
    value: '',
    isTouched: false,
  });

 async function email_validation(e){
  var request;
  e.preventDefault();
  if (request){
      request.abort;
  }
  var form = $(this);
  
  var inputs = form.find("input, button");
  
  var serializedData = $("form :input").serialize();

  inputs.prop("disabled", true);

  request = await $.ajax({
      url:"http://localhost/EasyParkTM/backend/email_validation.php",
      type: "post",
      data: serializedData,
      success: (resp) => {
          if (resp == "exists"){
              $('#register_errors').text("Email already in use!");
          }else if (resp == "Connect error"){
              alert("Email does not exist");
          }else{
              var code = prompt("Please enter the code we sent you on email:")
              while(code != resp && code != null){
                  code = prompt("Wrong code. Please enter the code again: ");
              }
              if(code == resp){
                  php_req();
              }
          }
          console.log(resp);
      },
      always: (resp) => {
          inputs.prop("disabled", false);
          console.log(resp);
      }
  });
}

async function php_req(){
  var request;
  event.preventDefault();
  if (request){
      request.abort;
  }
  var form = $(this);
  
  var inputs = form.find("input, button");
  
  var serializedData = $("form :input").serialize();

  inputs.prop("disabled", true);

  request = await $.ajax({
      url:"http://localhost/EasyParkTM/backend/register.php",
      type: "post",
      data: serializedData,
      success: (resp) => {
          if (resp == "user added"){
              alert("User registered successfully!");
              window.location.replace("./login");
          }
          console.log(resp);
      },
      always: (resp) => {
          inputs.prop("disabled", false);
          console.log(resp);
      }
  });
}


 const getIsFormValid = () => { 
  return (
    email && validateEmail(email) && password.value.length >= 8
  )
 }; 
 
 const handleSubmit = (e) => { 
   email_validation(e);
 }; 

  const validateEmail = (email) => {
    // Implement your email validation logic here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    
    <div id="register-body">
      <div className="register-container">
      <form id="registerForm" action = "" onSubmit={handleSubmit} method = "POST">
          <fieldset>
            <h2>Înregistrare</h2>

            <div className="register-field">
              <label>Email<sup>*</sup></label>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="register-field">
              <label>Parolă<sup>*</sup></label>
              <input
                name="password"
                value={password.value}
                type="password"
                onChange={(e) => {
                  setPassword({ ...password, value: e.target.value });
                }}
                onBlur={() => {
                  setPassword({ ...password, isTouched: true });
                }}
                placeholder="Parolă"
              />
              {password.isTouched && password.value.length < 8 && (
                <PasswordErrorMessage />
              )}
            </div>

            <button id = "register-button" type="submit" disabled={!getIsFormValid()}>
              Creează cont
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;