import React from 'react'
import './About.css'
import knife from '../../Assets/knife.png'
const About = () => {
    return (
        <div className='aboutUs app__bg container flex__center section__padding' id='about'>
            <div className="aboutUs-content flex__center">
                <div className="aboutUs-content-about">
                    <h1 className="headtext__cormorant">About Us</h1>
                    <p className="opensans">
                        At The Royal Saffron, we bring you an unparalleled dining experience that merges the opulence of royal heritage with the finesse of modern gourmet cuisine. Nestled in the heart of the city, our restaurant is a haven for connoisseurs of fine dining, offering a sophisticated ambiance that transports you to an era of grandeur and elegance.
                    </p>
                    <button type='button' className='custom__button'>Know More</button>
                </div>

                <div className="aboutUs-content-knife flex__center">
                    <img src={knife} alt="knife" />
                </div> 

                <div className="aboutUs-content-history">
                    <h1 className="headtext__cormorant">Our History</h1>
                    <p className="opensans">
                    The Royal Saffron was founded with a vision to create a dining destination that celebrates the rich culinary traditions of the world while embracing contemporary innovation. Our chefs, trained in some of the most prestigious kitchens globally, bring their expertise and creativity to every dish, ensuring a memorable gastronomic journey for our guests.
                    </p>
                    <button type='button' className='custom__button'>Know More</button>
                </div>
            </div>

        </div>
    )
}

export default About
