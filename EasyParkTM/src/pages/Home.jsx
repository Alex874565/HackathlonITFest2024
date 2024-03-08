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
      <p>Easy Park</p>
      <div className="line"></div>
    </div>
  );
};

export default Home;