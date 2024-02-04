import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  const handleMenu = (event) => {
    navigate('/menu')
  }
  const handleAwards = (event) => {
    navigate('/awards')
  }
  return(
  <div className='app-bg'>
    <div className="app-aboutus flex-center section-padding" id="about">
      <div className="app-aboutus-content flex-center">
        <div className="app-aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Welcome to Palermo – an authentic Italian dining experience where passion meets flavor. At Palermo, we take pride in bringing the heart of Italy to your table. Our journey began with a commitment to craft traditional recipes passed down through generations, ensuring each dish reflects the rich culinary heritage of Sicily.<br/>Join us at Palermo and let the taste of Italy become a part of your story. Buon Appetito!</p>
          <button type="button" className="custom-button" onClick={handleMenu}>View Menu</button>
        </div>

        <div className="app-aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Palermo's journey is intertwined with the changing tastes and preferences of its patrons. With each passing year, the restaurant has embraced new culinary trends while staying true to the timeless recipes that have become synonymous with its name. The expansion of the menu, the refinement of the dining experience, and the welcoming ambiance have all contributed to making Palermo a cherished institution in the local dining scene.</p>
          <button type="button" className="custom-button" onClick={handleAwards}>View Awards</button>
        </div>
      </div>
    </div>
    <div className="image-container flex-center">
      <img src={images.background2} alt="Image" />
      <div className="caption-box">
        <p className="caption-text p__cormorant">Palermo is the perfect place to spend time with friends and family.</p>
      </div>
    </div>
    <div className='buffer'></div>
  </div>
  )};

export default AboutUs;
