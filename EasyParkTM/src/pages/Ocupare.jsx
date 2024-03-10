import React, { useEffect } from 'react';
import '../stylesheets/Home.css';
import '../stylesheets/Ocupare.css';
import $ from 'jquery'
import Navbar from '../navbar/Navbar'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Ocupare(props){
  let { email } = useParams();
  const [street, setStreet] = useState('');
  const [isParked, setIsParked] = useState(false);
  const [streetsArray, setStreetsArray] = useState([]);
  const [streetName, setStreetName] = useState('');

  async function getData(){
    console.log('getData');
    let response;
    response = await $.ajax({
        url:"http://localhost/EasyParkTM/backend/get_streets.php",
        type:"get",
        success: (resp) => {
          console.log("---") 
        }
    });
    populate(response);
  }

  function populate(data){
    console.log('populate');
    var lines = data.split("\n");
    var line_no;
    const dataMap = [];
    for(line_no = 0; line_no < lines.length - 1; line_no++){
      var line = lines[line_no].split("; ");
      var street_name = line[0];
      var total_space = Number(line[1]);
      var occupied_space = Number(line[2]);
      dataMap.push(
        {
          street_name: street_name,
          is_full: (total_space-occupied_space) <= 0
        }
      )
    }
    setStreetsArray(dataMap);
    console.log(streetsArray);
}

  async function check_parking_status(){
    await $.ajax({
      url:"http://localhost/EasyParkTM/backend/parking_status.php",
      type: "POST",
      data: `email=${email}`,
      success: (resp) => {
        console.log(resp);
        if(resp != null && resp != '' && resp != undefined && resp != 'no_user'){
          setIsParked(true);
          setStreetName(resp);
        }
      }
    }
    )
  }

  function onInput(e) {
    var street_name = e.target.value;
  
    var street_name_index = streetsArray.map((o) => o.street_name).indexOf(street_name);
    
    if(street_name_index != -1){
      var obj = streetsArray[street_name_index];

      setStreet(obj);
    }
  }

  async function occupy_parking_spot(e){
    if(street.street_name != '' && street.street_name != null){
      e.preventDefault();
      if(street.is_full){
        window.alert("Nu mai sunt locuri de parcare pe aceasta strada.");
      }else{
        await $.ajax({
          url:"http://localhost/EasyParkTM/backend/occupy_parking.php",
          type: "POST",
          data: `email=${email}&loc_parcare=${street.street_name}`,
          success: (resp) => {
            console.log(resp);
          }
        })
        window.location.reload();
      }
    }else{
      window.alert("Te rog introdu o strada valida.")
    }
  }

  async function release_parking_spot(e){
    e.preventDefault();
    await $.ajax({
      url: "http://localhost/EasyParkTM/backend/release_parking.php",
      type: "POST",
      data: `email=${email}&loc_parcare=${streetName}`,
      succes: (resp) => {
        console.log(resp);
      },
      error: () => {console.log('error');}
    })
    window.location.reload();
  };

  useEffect(() => {getData()}, []);
  useEffect(() => {check_parking_status()}, []);

  return (
    <div>
    {Navbar(email)}
      <div className='parking-container'>
        {!isParked &&
          (<div className="not-parked-div">
          <h1>Introduceți numele străzii pe care parcati:</h1>
            <input list="streets" id="parking-search" name="loc_parcare" onInput={onInput} placeholder="Unde doresti sa parchezi?" />
            <datalist id="streets">
              {streetsArray && streetsArray.map(s => (<option key={s.street_name}>{s.street_name}</option>))}
            </datalist>
            <button onClick={occupy_parking_spot}>Parcheaza</button>
            </div>
            )}
        {isParked &&
          (<div className='parked-div'>
            <p>Mașina ta este parcată pe {streetName}.</p>
            <button type="button" className="parking-button" onClick={release_parking_spot}>
            Eliberează locul de parcare
            </button>
          </div>)}
        </div>
    </div>
    
  )
};

export default Ocupare;