import React, { useState, useEffect } from 'react';
import '../stylesheets/Home.css';
import $ from 'jquery';
import Navbar from '../navbar/Navbar';
import { useParams } from 'react-router-dom';
import HtraficImage from '../assets/pozica_high.png';
import MtraficImage from '../assets/pozica_mediocra.png';
import LtraficImage from '../assets/pozica_speedy.png';


function Home(props) {
  let { email } = useParams();
  const [trafficStatus, setTrafficStatus] = useState('Normal');
  const [listOptions, setListOptions] = useState();
  const [selectedOption , setSelectedOption] = useState();

  const getCurrentHour = () => {
    const now = new Date();
    return now.getHours();
  };

  const determineTrafficStatus = () => {
    const hour = getCurrentHour();

    if ((hour >= 7 && hour <= 9) || (hour >= 16 && hour <= 19)) {
      return 'Intens';
    } else if (hour > 9 && hour < 16) {
      return 'Moderat';
    } else {
      return 'Redus';
    }
  };

  const getTrafficImage = (status) => {
    // Map traffic status to corresponding image source
    const images = {
      'Intens': HtraficImage,
    'Moderat': MtraficImage,
    'Redus': LtraficImage,
    };
    return images[status] || 'default_image_path.jpg'; // Provide a default image path if status is not found
  };

  useEffect(() => {
    // Update traffic status when the component mounts and every hour
    setTrafficStatus(determineTrafficStatus());

    const interval = setInterval(() => {
      setTrafficStatus(determineTrafficStatus());
    }, 3600000); // Update every hour

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  function populate(data){
    var lines = data.split("\n");
    var line_no;
    const dataMap = [];

    for(line_no = 0; line_no < lines.length - 1; line_no++){
      console.log(line_no);
      var line = lines[line_no].split("; ");
      var street_name = line[0];
      var total_space = Number(line[1]);
      var occupied_space = Number(line[2]);
      dataMap.push({
        street_name: street_name,
        total_space: total_space,
        free_space: total_space - occupied_space
      });
    }
    setListOptions(dataMap);
    console.log(dataMap);
  }

  function getData(){
    $.ajax({
        url:"http://localhost/EasyParkTM/backend/get_streets.php",
        type:"post",
        data: "",
        success: (resp) => {
          console.log(resp);
          populate(resp);
        } 
    });
  }

  function onInput(e) {
    var street_name = e.target.value;
    
    var street_name_index = listOptions.map((o) => o.street_name).indexOf(street_name);

    if(street_name_index != -1){
      var obj = listOptions[street_name_index];

      setSelectedOption(obj);
    }
  }

  useEffect(() => {getData()}, []);

  return (
    <div id='home-body'>
      {Navbar(email)}
      <div className='home-container'>
        <div className='home-search-container'>
          <div className="home-search-bar">
            <div className='centered-paragraph'>
              <div id='home-title-div'>
                {selectedOption ? (<p id="home-title"> Locuri libere: {selectedOption.free_space} din {selectedOption.total_space}.</p>) : <p id="home-title">Easy Park</p>}
              </div>
            </div>
          </div>
        </div>
        <input list="streets" id="home-search" name="home-search" onInput={onInput} placeholder="Mergi undeva?..." />
          <datalist id="streets">
            {listOptions && listOptions.map(lo => (<option key={lo.street_name}>{lo.street_name}</option>))}
          </datalist>
        <div className="city-status-bar">
          <p id="city-status">Status Trafic:<br /> {trafficStatus}</p>
          <img src={getTrafficImage(trafficStatus)} alt={`Status Trafic: ${trafficStatus}`} />
        </div>
      </div>
    </div>
  );
};

export default Home;