import React from 'react'
import SubHeading from '../SpecialMenu/SubHeading'

const FindUs = () => {
  return (
    <div className="app__bg container app__wrapper section__padding" id="contact">
        <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
        <div className="app__wrapper-content">
            <p className="opensans">Juhu Tara Rd, Opposite Juhu Beach, Near Ramada Plaza, Juhu Tara, Juhu, Mumbai.</p>
            <p className="cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
            <p className="opensans">Mon - Fri: 10:00 am - 02:00 am</p>
            <p className="opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
        </div>

        {/* <div className="app__wrapper_img">
        <img src={images.findus} alt="finus_img" />
        </div> */}
    </div>
  )
}

export default FindUs
