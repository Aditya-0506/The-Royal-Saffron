import React, { useState } from 'react';
import Lottie from 'react-lottie';
import './BookingForm.css';
import logo from '../../Assets/TheRoyalSaffronLogo2.png';
import successAnimation from '../../Assets/success.json';

const BookingForm = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate form submission
    // Here you would typically handle form data submission to a server
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {submitted ? (
          <div className="success-message">
            <Lottie options={defaultOptions} height={200} width={200} />
            <h1>Booking Successful!</h1>
            <p>Thank you for booking with us. We look forward to serving you!</p>
            <button onClick={handleClose}>Close</button>
          </div>
        ) : (
          <>
            <span className="close" onClick={handleClose}>&times;</span>
            <img src={logo} alt="The Royal Saffron Logo" className="modal-logo" />
            <h1>Book a Table</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />

              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" required />

              <label htmlFor="time">Time:</label>
              <input type="time" id="time" name="time" required />

              <label htmlFor="guests">Number of Guests:</label>
              <input type="number" id="guests" name="guests" min="1" required />

              <button type="submit">Submit Booking</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
