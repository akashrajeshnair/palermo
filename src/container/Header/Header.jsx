import React from 'react';

import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app-header app-wrapper section-padding" id='home'>
    <div className='app-wrapper-info'>
      <SubHeading title="Chase the new flavor"/>
      <h1 className='app-header-h1'>An experience for your tastebuds</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>djafshdgsy afhyd gsinu cymdiuah s fmhi ygicsd aghdsunacfisd hfu dhfai seu fuhdia fosdu udshi udfhsia ods uaiho sfdh uaofi.djafshdgsy afhyd gsinu cymdiuah s fmhi ygicsd aghdsunacfisd hfu dhfai seu fuhdia fosdu udshi udfhsia ods uaiho sfdh uaofi.djafshdgsy afhyd gsinu cymdiuah s fmhi ygicsd aghdsunacfisd hfu dhfai seu fuhdia fosdu udshi udfhsia ods uaiho sfdh uaofi.</p>
      <button type='button' className='custom-button'>Explore menu</button>
    </div>
    <div className='app-wrapper-img'>
      <img src={images.welcome} alt="welcome-img" />
    </div>
  </div>
);

export default Header;
