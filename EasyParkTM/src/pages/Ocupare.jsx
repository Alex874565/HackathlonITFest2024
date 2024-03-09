import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../stylesheets/Home.css';
import '../stylesheets/Ocupare.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../navbar/Navbar'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Ocupare(props){
  let { email } = useParams();
  const [streetName, setStreetName] = useState('');
  const [isParked, setIsParked] = useState(false);

  async function check_parking_status(){
    let request = await $.ajax({
      url:"http://localhost/EasyParkTM/backend/parking_status.php",
      type: "POST",
      data: `email=${email}`,
      success: (resp) => {
        console.log(resp)
      }
    }
    )
  }

const releaseParking = () => {
    // Aici faci cererea către backend pentru a elibera locul de parcare în baza de date
    fetch('http://localhost/api.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, street: '' }), // Eliberare locului de parcare
    })
    .then(response => response.json())
    .then(data => {
        console.log('Loc de parcare eliberat:', data);
        setIsParked(false);
    })
    .catch(error => {
        console.error('Eroare la eliberarea locului de parcare:', error);
    });
};



  return (
    <div>
    {Navbar(email)}

      <div className='parking-container'>
          <div className="parking-controls">
          <h1>Introduceți numele străzii pe care vă aflați:</h1>
            <input
              type="text"
              id="parkingSearch"
              name="parkingSearch"
              placeholder="Numele străzii pentru parcare..."
              value={streetName}
              onChange={(e) => setStreetName(e.target.value)}
            />
            
            <button type="button" className="parking-button" onClick={occupyParking}>
            Ocupă locul de parcare
            </button>
            
            <button type="button" className="parking-button" onClick={releaseParking}>
            Eliberează locul de parcare
            </button>

          </div>
          {isParked ? <p>Mașina ta este parcată pe {streetName}.</p> : null}
        </div>




    </div>
    
  )
};

export default Ocupare;