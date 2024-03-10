import React from 'react';
import Navbar from '../navbar/Navbar';
import '../navbar/Navbar.css';
import '../stylesheets/Contact.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import $ from 'jquery';

function Contact(props) {
  let { email } = useParams();

  const [ subject, setSubject ] = useState('');
  const [ name, setName ] = useState('');
  const [ message, setMessage ] = useState('');

  async function sendMailPhp(e){
    e.preventDefault();
    if(message != undefined && message != ""){

        setMessage(message.replaceAll("'", ""));

        var serializedData = `name=${name}&email=${email}&message=${message}&subject=${subject}`;
        await $.ajax({
            url: "http://localhost/EasyParkTM/backend/email.php",
            type: "post",
            data: serializedData,
            success: (resp) => {console.log(resp); if(resp == "Message has been sent")window.alert("Message sent!");}
        });
    }else{
        window.alert("Field empty!");
    }
}

  return (
    <div id="contact-body">
      {Navbar(email)}
      <br></br>
      <div className="contact-us-container">
        <div className="contact-border">
          <h2>Contact</h2>
          <p>
            Dacă aveți întrebări sau nelămuriri, nu ezitați să ne contactați.
          </p>
        </div>
        <br></br>
        <div className="message-container">
          <h2>Scrie un mesaj</h2>
          <label htmlFor="fullName">Nume complet:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Nume"
            required
            onInput={(e) => setName(e.target.value)}
          />
          <label htmlFor="subject">Subiect:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subiect"
            required
            onInput={(e) => setSubject(e.target.value)}
          />
          <label htmlFor="message">Scrie un mesaj:</label>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Mesaj"
            required
            onInput={(e) => setMessage(e.target.value)}
          />

          <button type="button" onClick={sendMailPhp}>Trimite</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;