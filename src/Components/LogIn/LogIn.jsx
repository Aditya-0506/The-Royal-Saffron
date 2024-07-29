import React from 'react';
import './LogIn.css';
import logo from '../../Assets/TheRoyalSaffronLogo2.png';

const LogIn = ({ setShowLogin, setShowSignup }) => {
  return (
    <div className="login-form-container" id='LogIn'>
      <div className="login-form">
        <div className="close-button" onClick={() => setShowLogin(false)}>×</div>
        <div className="login-form-left">
          <h2>Sign In</h2>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
          </form>
          <div className="login-social">
            <p>or sign in with</p>
            <div className="social-icons">
              <a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a>
              <a href="javascript:void(0)"><i className="fab fa-google"></i></a>
              <a href="javascript:void(0)"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="login-form-right">
          <img src={logo} alt="The Royal Saffron Logo" className="logo" />
          <h2>Welcome back!</h2>
          <p>We are so happy to have you here. It’s great to see you again. We hope you had a safe and enjoyable time away.</p>
          <p>No account yet? <a href="javascript:void(0)" onClick={() => { setShowLogin(false); setShowSignup(true); }}>Signup</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
