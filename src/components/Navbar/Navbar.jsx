import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return(
    <nav className='app-navbar'>
      <div className='app-navbar-logo'>
        <img src={images.logo} alt="app logo" />
      </div>
      <ul className='app-navbar-links'>

        <li className='p__opensans'><a href="/">Home</a></li>
        <li className='p__opensans'><a href="/about">About</a></li>
        <li className='p__opensans'><a href="/menu">Menu</a></li>
        <li className='p__opensans'><a href="/awards">Awards</a></li>
        <li className='p__opensans'><a href="/contact">Contact</a></li>
      </ul>
      <div className='app-navbar-login'>
        <a href="/book" className='p__opensans'>Book a Table</a>
      </div>
      <div className='app-navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <div className='app-navbar-smallscreen-overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay-close' onClick={() => setToggleMenu(false)}/>
            <ul className='app-navbar-smallscreen-links'>
              <li className='p__opensans'><a href="/">Home</a></li>
              <li className='p__opensans'><a href="/about">About</a></li>
              <li className='p__opensans'><a href="/menu">Menu</a></li>
              <li className='p__opensans'><a href="/awards">Awards</a></li>
              <li className='p__opensans'><a href="/contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
