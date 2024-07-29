import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import logo from '../../Assets/TheRoyalSaffronLogo2.png';
import BookingForm from '../BookingForm/BookingForm';

const Navbar = ({ setShowLogin }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookTableClick = () => {
    setShowBookingForm(true);
    setToggleMenu(false); // Close the menu on book table click
  };

  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
  };

  const handleMenuClick = (section) => {
    setToggleMenu(false); // Close the menu on any menu item click
    if (section === 'LogIn') {
      setShowLogin(true);
    }
    if (section === 'BookTable') {
      handleBookTableClick();
    }
  };

  return (
    <>
      <nav className='nav-container'>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav-links">
          <li className="openLink"><a href="#home">Home</a></li>
          <li className="openLink"><a href="#about">About</a></li>
          <li className="openLink"><a href="#menu">Menu</a></li>
          <li className="openLink"><a href="#chefs">Chefs</a></li>
          <li className="openLink"><a href="#contact">Contact</a></li>
        </ul>
        <div className="login">
          <a href="#!" className='openLink' onClick={() => setShowLogin(true)}>Log In</a>
          <a href="#!" className="openLink" onClick={handleBookTableClick}>Book Table</a>
        </div>
        <div className="smallScreenMenu">
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="smallScreen-overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className='overlay-close' onClick={() => setToggleMenu(false)} />
              <ul className="smallScreen-nav-links">
                <li className="openLink"><a href="#home" onClick={() => handleMenuClick('home')}>Home</a></li>
                <li className="openLink"><a href="#about" onClick={() => handleMenuClick('about')}>About</a></li>
                <li className="openLink"><a href="#menu" onClick={() => handleMenuClick('menu')}>Menu</a></li>
                <li className="openLink"><a href="#chefs" onClick={() => handleMenuClick('chefs')}>Chef</a></li>
                <li className="openLink"><a href="#contact" onClick={() => handleMenuClick('contact')}>Find Us</a></li>
                <li className="openLink"><a href="#!" onClick={() => handleMenuClick('LogIn')}>Log in</a></li>
                <li className="openLink"><a href="#!" onClick={() => handleMenuClick('BookTable')}>Book Table</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <BookingForm isOpen={showBookingForm} onClose={handleCloseBookingForm} />
    </>
  );
};

export default Navbar;
