import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../stylesheets/Home.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../navbar/Navbar'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Home(props){
  let { username, email } = useParams();
  /*const [trafficStatus, setTrafficStatus] = useState('Normal');
  const getCurrentHour = () => {
    const now = new Date();
    return now.getHours();
};

const determineTrafficStatus = () => {
  const hour = getCurrentHour();

  if (hour >= 7 && hour <= 9) {
      return 'Heavy Traffic';
  } else if (hour >= 16 && hour <= 18) {
      return 'Moderate Traffic';
  } else {
      return 'Normal';
  }
};

useEffect(() => {
  // Update traffic status when the component mounts
  setTrafficStatus(determineTrafficStatus());
}, []);*/
  return (
    <div>
    {Navbar(username, email)}
    <div className='home-container'>
      <div className='search-container'>
        <div className="search-bar">
          <div className='centered-paragraph'>
          <div className='homeBody'>
            <p>Easy Park</p>
          </div>
          </div>
          <div className="line"></div>
          <input type="text" id="search" name="search" placeholder="Going somewhere?..." />
          <button type="button">Go</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;