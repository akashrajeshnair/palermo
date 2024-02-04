import React from 'react';
import '../Findus/FindUs.css'

const FindUs = () => (
  <div className='app-bg'>
    <div className='buffer-top'></div>
    <div className="contact-us-container">
        <h2 className='p__cormorant'>Contact Us</h2>

        <div className="contact-details">
          <p className='p__opensans'>Email: info@restaurantpalermo.com</p>
          <p className='p__opensans'>Phone: +1 (123) 456-7890</p>
          <p className='p__opensans'>Address: #4, Indiranagar, Bangalore, India</p>
        </div>

        <div className="social-media-links p__opensans">
          <a href="https://www.facebook.com/restaurantpalermo" target="_blank" rel="noopener noreferrer" style={{color: 'darkblue'}}>
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com/restaurantpalermo" target="_blank" rel="noopener noreferrer" style={{color: 'lightblue'}}>
            <img src="twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/restaurantpalermo" target="_blank" rel="noopener noreferrer" style={{color: 'orange'}}>
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
        </div>
      </div>
      <div className='buffer-bottom'></div>
  </div>
);

export default FindUs;
