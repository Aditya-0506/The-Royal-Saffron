import React from 'react';
import './Footer.css'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import logo from '../../Assets/TheRoyalSaffronLogo2.png'

// import { FooterOverlay, Newsletter } from '../../components';


const Footer = () => (
  <div className="app__footer container section__padding" id="login">
    {/* <FooterOverlay />
    <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="opensans">Juhu Tara Rd, Opposite Juhu Beach, Near Ramada Plaza, Juhu Tara, Juhu, Mumbai.</p>
        <p className="opensans">+91 1234567890</p>
        <p className="opensans">+91 9876543210</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={logo} alt="footer_logo" />
        <p className="opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="opensans">Monday-Friday:</p>
        <p className="opensans">10:00 am - 02:00 am</p>
        <p className="opensans">Saturday-Sunday:</p>
        <p className="opensans">10:00 am - 03:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="opensans">2024 The Royal Saffron. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;