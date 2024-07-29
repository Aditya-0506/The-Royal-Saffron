import React from 'react'
import './Chef.css'
import SubHeading from '../SpecialMenu/SubHeading'
import chefPic from '../../Assets/chefPic.png'
import autograph from '../../Assets/autograph.png'
import apostrophe from '../../Assets/apostrophe.png'

const Chef = () => {
  return (
    <div className="app__bg container app__wrapper section__padding" id='chefs'>
        <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={chefPic} alt="chef_image" />
        </div>
        <div className="app__wrapper_info">
        <SubHeading title="Chef's word" />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="chef-content">
            <div className="chef-content_quote">
            <img src={apostrophe} alt="quote_image" />
            <p className="opensans">Cooking is not just a skill, but an art form. </p>
            </div>
            <p className="opensans"> At The Royal Saffron, we create culinary masterpieces that tantalize your taste buds and nourish your soul.</p>
        </div>

        <div className="chef-sign">
            <p>Chef Arjun Mehra</p>
            <p className="opensans">Head Chef</p>
            <img src={autograph} alt="sign_image" />
        </div>
        </div>
    </div>
  )
}

export default Chef
