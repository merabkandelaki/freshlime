import React, { useRef, useEffect } from 'react';
import { useScroll } from '../../context/ScrollContext';
import './Hero.css';
import CustomerImg1 from '../../assets/images/customer-1.jpg';
import CustomerImg2 from '../../assets/images/customer-2.jpg';
import CustomerImg3 from '../../assets/images/customer-3.jpg';
import CustomerImg4 from '../../assets/images/customer-4.jpg';
import CustomerImg5 from '../../assets/images/customer-5.jpg';
import CustomerImg6 from '../../assets/images/customer-6.jpg';
import HeroImage from '../../assets/images/gym.jpg';

const Hero = () => {
  const ref = useRef(null);
  const { registerRef } = useScroll();

  useEffect(() => {
    registerRef('hero', ref);
  }, [registerRef]);

  const { scrollTo } = useScroll();
  return (
    <div className="section-hero" ref={ref}>
      <div className="hero">
        <div className="hero-text">
          <h1 className="heading-primary">
            Welcome to the one of the best Gym Freshlime
          </h1>
          <p className="hero-description">
            This is the cheapest, comfrtable, best price with world champion
            coatches and one of the best barthender for your protain shakes.
          </p>
          <div className="btn-left-right">
            <span className="btn-left" onClick={() => scrollTo('contact')}>
              Get your month pass
            </span>
            <span className="btn-right" onClick={() => scrollTo('works')}>
              Learn more ↓
            </span>
          </div>
          <div className="customers">
            <div className="customers-imgs">
              <img src={CustomerImg1} alt="image-1" />
              <img src={CustomerImg2} alt="image-2" />
              <img src={CustomerImg3} alt="image-3" />
              <img src={CustomerImg4} alt="image-4" />
              <img src={CustomerImg5} alt="image-5" />
              <img src={CustomerImg6} alt="image-6" />
            </div>
            <p className="customer-text">from the whole world!</p>
          </div>
        </div>
        <div className="hero-img-box">
          <img className="hero-img" src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
