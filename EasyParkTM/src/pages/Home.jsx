import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../stylesheets/Home.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { useParams } from 'react-router-dom';

function Home(props) {
  let { username, email } = useParams();
  const [trafficStatus, setTrafficStatus] = useState('Normal');

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
    // Update traffic status when the component mounts and every hour
    setTrafficStatus(determineTrafficStatus());

    const interval = setInterval(() => {
      setTrafficStatus(determineTrafficStatus());
    }, 3600000); // Update every hour

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div id='home-body'>
    {Navbar(username, email)}
    <div className='home-container'>
      <div className='home-search-container'>
        <div className="home-search-bar">
          <div className='centered-paragraph'>
          <div id='home-title-div'>
            <p id="home-title">Easy Park</p>
          </div>
          </div>
          <div className="line"></div>
          <input type="text" id="home-search" name="search" placeholder="Going somewhere?..." />
          <button id="home-go-button" type="button">Go</button>
        </div>
      </div>
    </div>
    <div className="city-status-bar">
        <p id="city-status">City Status: {trafficStatus}</p>
      </div>
    </div>
  );
};

export default Home;