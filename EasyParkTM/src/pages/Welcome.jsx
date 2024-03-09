import React, { useEffect, useState } from 'react';
import logoImage from '../assets/ez_prk_4k.png'
import '../stylesheets/Welcome.css';

const WelcomePage = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate loading effect with a delay
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 3000); // Adjust the delay duration as needed
  
      // Cleanup timeout on component unmount
      return () => clearTimeout(timeout);
    }, []);
  
    return (
      <div className="welcome-container">
        {loading ? (
          <div className="loading-bar"></div>
        ) : (
          <>
            <h1 className="welcome-message">Welcome to...</h1>
            <img src={logoImage} alt="EasyPark Logo" className="logo-image" />
            {/* Additional content or redirection logic after loading */}
          </>
        )}
      </div>
    );
  };
  
  export default WelcomePage;