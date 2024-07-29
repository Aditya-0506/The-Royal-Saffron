import React from 'react';
import './SignupForm.css';
import logo from '../../Assets/TheRoyalSaffronLogo2.png';

const SignupForm = ({ setShowSignup, setShowLogin }) => {
  return (
    <div className="signup-form-container">
      <div className="signup-form">
        <div className="close-button" onClick={() => setShowSignup(false)}>×</div>
        <div className="signup-form-left">
          <h2>Sign Up</h2>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
          </form>
          <div className="signup-social">
            <p>or sign up with</p>
            <div className="social-icons">
              <a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a>
              <a href="javascript:void(0)"><i className="fab fa-google"></i></a>
              <a href="javascript:void(0)"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="signup-form-right">
          <img src={logo} alt="The Royal Saffron Logo" className="logo" />
          <h2>Welcome to The Royal Saffron!</h2>
          <p>We are thrilled to have you join our community. Sign up and start your journey with us today!</p>
          <p>Already have an account? <a href="javascript:void(0)" onClick={() => { setShowSignup(false); setShowLogin(true); }}>Sign in</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
