import React from 'react';
import SubHeading from './SubHeading.jsx';
import MenuItem from '../MenuItem/MenuItem.jsx';
import menu from '../../Assets/menu.png'
import data from '../../Assets/Data/Data.js';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="specialMenu container flex__center app__bg section__padding" id="menu">
    <div className="specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="specialMenu-menu">
      <div className="specialMenu-menu_appetizers  flex__center">
        <p className="specialMenu-menu_heading">Appetizers</p>
        <div className="specialMenu_menu_items">
          {data.appetizers.map((appetizers, index) => (
            <MenuItem key={appetizers.title + index} title={appetizers.title} price={appetizers.price} tags={appetizers.tags} />
          ))}
        </div>
      </div>

      <div className="specialMenu-menu_img">
        <img src={menu} alt="menu-img" />
      </div>

      <div className="specialMenu-menu_mainCourse  flex__center">
        <p className="specialMenu-menu_heading">Main Course</p>
        <div className="specialMenu_menu_items">
          {data.mainCourse.map((mainCourse, index) => (
            <MenuItem key={mainCourse.title + index} title={mainCourse.title} price={mainCourse.price} tags={mainCourse.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;