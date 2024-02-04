import React from 'react';

import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app-header app-wrapper section-padding app-bg" id='home'>
    <div className='app-wrapper-info'>
      <SubHeading title="Chase the new flavor"/>
      <h1 className='app-header-h1'>An experience for your tastebuds</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Welcome to Palermo – Where Culinary Artistry Meets Timeless Tradition. Nestled in the heart of Bangalore, our restaurant is a celebration of the rich tapestry of Italian flavors and the warmth of Mediterranean hospitality. Immerse yourself in a journey of exquisite tastes, where each dish is a masterpiece crafted with passion and authenticity. From our handpicked ingredients to the inviting ambiance, Palermo invites you to savor the essence of Italy, creating moments that linger on the palate and in the heart. Join us for a culinary experience that transcends the ordinary, and let the spirit of Palermo unfold around you.</p>
      <button type='button' className='custom-button'>Explore menu</button>
    </div>
    <div className='app-wrapper-img'>
      <img src={images.welcome} alt="welcome-img" />
    </div>
  </div>
);

export default Header;
