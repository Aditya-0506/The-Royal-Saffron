import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import LogIn from '../LogIn/LogIn';
import SignupForm from '../SignupForm/SignupForm';
import './Home.css';

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="hero container" id='home'>
      <Navbar setShowLogin={setShowLogin} />
      <div className="overlay">
        <h1>Welcome to</h1>
        <h2>The Royal Saffron</h2>
        <p>Where Gourmet Meets Grandeur</p>
      </div>
      {showLogin && <LogIn setShowLogin={setShowLogin} setShowSignup={setShowSignup} />}
      {showSignup && <SignupForm setShowSignup={setShowSignup} />}
    </div>
  );
}

export default Home;
