import React, { useState } from 'react';
import './AlliedServicesBanner.css';
import istockPhoto from '../assets/adf639593b1757d9e37b7af649606ff271e5df5b.png';

const AlliedServicesBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      title: 'Overseas Education Loans',
      description: 'Provide end to end overseas education loan assistance to your students to help them achieve their goal',
      buttonText: 'Get Started'
    },
    {
      title: 'Study Abroad Programs',
      description: 'Explore comprehensive study abroad programs and find the perfect university match for your students',
      buttonText: 'Learn More'
    },
    {
      title: 'Visa Assistance',
      description: 'Get expert guidance on visa applications and documentation to ensure a smooth process',
      buttonText: 'Contact Us'
    }
  ];

  return (
    <>
    <div className="allied-services-banner">
      <div className="banner-content">
        <div className="banner-text">
          <div className="banner-label">Allied Services</div>
          <h2 className="banner-title">{banners[currentSlide].title}</h2>
          <p className="banner-description">{banners[currentSlide].description}</p>
          <button className="btn btn-banner">{banners[currentSlide].buttonText}</button>
        </div>
        <div className="banner-image">
          <div className="image-container">
            <img 
              src={istockPhoto}
              alt="Student with backpack"
              className="banner-img"
            />
            <div className="banner-overlay-icons">
              <div className="overlay-icon icon-1">🔍</div>
              <div className="overlay-icon icon-2">📚</div>
              {/* <div className="overlay-icon icon-3">🎓</div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="banner-indicators">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
    <div className="banner-indicators">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default AlliedServicesBanner;


