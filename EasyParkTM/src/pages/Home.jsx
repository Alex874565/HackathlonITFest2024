import React from 'react';
import '../stylesheets/Home.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className='nav-bar' id="navBar">
      <img src="/assets/CD5E2480-1833-4079-A133-D5D6F423A864.png" alt="Logo" className="logo" />
      <h1>Easy Park</h1>
      {/* Add your content here */}
    </div>
  );
};

export default HomeScreen;