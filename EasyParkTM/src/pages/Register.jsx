import React, { useEffect } from 'react';
import '../stylesheets/Register.css';

import { useParams } from 'react-router-dom';


import {useState} from "react"; 
import Navbar from '../navbar/Navbar';

 
const PasswordErrorMessage = () => { 
 return ( 
   <p className="FieldError">Parola trebuie să conțină cel puțin 8 caractere</p> 
 ); 
}; 
 
function Register() { 
 const [firstName, setFirstName] = useState(""); 
 const [lastName, setLastName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState({ 
   value: "", 
   isTouched: false, 
 }); 
 const [role, setRole] = useState("role"); 

 const getIsFormValid = () => { 
   return ( 
     firstName && 
     validateEmail(email) && 
     password.value.length >= 8 && 
     role !== "role" 
   ); 
 }; 
 
 const clearForm = () => { 
   setFirstName(""); 
   setLastName(""); 
   setEmail(""); 
   setPassword({ 
     value: "", 
     isTouched: false, 
   }); 
   setRole("role"); 
 }; 
 
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   alert("Account created!"); 
   clearForm(); 
 }; 
 
 return ( 
  <div>
   <div className="App">
      <div className="register-container">
     <form id="registerForm" onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Înregistrare</h2> 
         
         <div className="Field"> 
           <label> 
             Email<sup>*</sup> 
           </label> 
           <input 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Email" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Parolă<sup>*</sup> 
           </label> 
           <input 
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
           {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
         </div> 
         
         <button type="submit" disabled={!getIsFormValid()}> 
           Creează cont 
         </button> 
       </fieldset> 
     </form> 
   </div> 
   </div>
   </div>
 ); 
} 
    


export default Register;