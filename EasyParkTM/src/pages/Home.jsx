import React from 'react';
import '../stylesheets/Home.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../navbar/Navbar'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Home(props){
  let { username, email } = useParams();
  return (
    <div className='homeBody'>
      {Navbar(username, email)}
      <div className='search-container'>
        <div className="search-bar">
          <div className="header-image">
            <img src="../assets/mock.png" alt="Pozica Image" />
          </div>
          <div className='centered-paragraph'>
            <p>Easy Park</p>
          </div>
          <div className="line"></div>
          <input type="text" id="search" name="search" placeholder="Street Search..." />
          <button type="button">Go</button>
        </div>
      </div>
    </div>
  );
};

export default Home;