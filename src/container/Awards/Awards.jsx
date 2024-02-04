import React from 'react';
import {images} from '../../constants'
import './Awards.css';

const Laurels = () => {
  const awardsData = [
    {
      title: 'Best Restaurant',
      description: 'Awarded for outstanding culinary excellence and service.',
      image: images.award01,
    },
    {
      title: 'Travellers Choice Award',
      description: 'Awarded for being an outstanding culinary destination for the discerning traveller.',
      image: images.award01,
    },
    {
      title: 'Oasis Award for Hospitality',
      description: 'Awarded for outstanding service and hospitality.',
      image: images.award02,
    },
    {
      title: 'Best Italian Restaurant - India',
      description: 'Awarded for outstanding culinary excellence and service.',
      image: images.award03,
    },
    {
      title: 'Green Guardian Award',
      description: 'Awarded for acheiving carbon-neutral status.',
      image: images.award05,
    },
    {
      title: 'Eco-Friendly Haven Certification',
      description: 'Awarded for preventing waste and commitment to preserving the environment.',
      image: images.award01,
    },
  ]
  return(
    <div className='app-bg'>
    <div className="awards-container">
      <h2 className='p__cormorant heading'>Awards Showcase</h2>
      <div className="awards-list">
        {awardsData.map((award, index) => (
          <div key={index} className="award-item">
            <img src={award.image} alt={award.title} />
            <h3>{award.title}</h3>
            <p>{award.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
};

export default Laurels;
