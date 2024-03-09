import React from 'react';
import Navbar from '../navbar/Navbar';
import '../navbar/Navbar.css';
import '../stylesheets/Contact.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Contact(props) {
  let { username, email } = useParams();

  return (
    <div id="contact-body">
      {Navbar(username, email)}
      <br></br>
      <div className="contact-us-container">
        <div className="contact-border">
          <h2>Contact</h2>
          <p>
            Dacă aveți întrebări sau nelămuriri, nu ezitați să ne contactați:
          </p>
          <p>Email: example@example.com</p>
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
          />
          <label htmlFor="emailAdress">Adresă de email:</label>
          <input
            type="text"
            id="emailAdress"
            name="emailAdress"
            placeholder="Email"
            required
          />
          <label htmlFor="subject">Subiect:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subiect"
            required
          />
          <label htmlFor="message">Scrie un mesaj:</label>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Mesaj"
            required
          />

          <button type="submit">Trimite</button>
        </div>
      </div>
      {/* Add a contact form here if needed */}

      <div className="map-container">
        {/* You can embed a map or any other location-related information here */}
        {/* Example: <iframe src="your-map-url" width="600" height="450" title="Location"></iframe> */}
      </div>
    </div>
  );
}

export default Contact;